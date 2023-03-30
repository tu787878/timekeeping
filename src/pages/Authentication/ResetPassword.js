import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Row, Col, Alert, Card, CardBody, Container, Label } from "reactstrap";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Select,
} from 'antd';
//redux
import { useSelector, useDispatch } from "react-redux";
import { withTranslation } from "react-i18next";

import { withRouter, Link } from "react-router-dom";
import { get, post } from "../../helpers/api_helper"
import * as url from "../../helpers/url_helper"
// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

// action
import { userForgetPassword } from "../../store/actions";

// import images
import profile from "../../assets/images/profile-img.png";
import logo from "../../assets/images/logo.svg";
import { useLocation } from "react-router-dom";
const ResetPassword = props => {

  //meta title
  document.title = "Forget Password | Skote - React Admin & Dashboard Template";

  const dispatch = useDispatch();

  const [success, setSuccess] = useState(false)
  const [tokenValid, setTokenValid] = useState(false)
  const [forgetSuccessMsg, setForgetSuccess] = useState(null)
  const [forgetFailMsg, setForgetFail] = useState(null)
  const [form] = Form.useForm();
  const search = useLocation().search;
  const token = new URLSearchParams(search).get('token');

  console.log(token);

  const onCheckToken = () =>{
    if(token)
    {
      get(url.LOGIN_DEMO + "/check-do-reset-password?token=" + token)
      .then((data)=>{
        console.log(data);
          setTokenValid(true)
        }).catch(err => {
        console.log(err);
        setTokenValid(false)

      })
    }
   
  }

  useEffect(() => {
    onCheckToken()
  }, [])

  const onFinish = (values) => {
    console.log(values);
    post(url.LOGIN_DEMO + "/do-reset-password?token=" + token + "&password=" + values.password)
      .then((data)=>{
          console.log(data);
          setSuccess(true);
        }).catch(err => {
        console.log(err);
        setTokenValid(false)

      })
  }

  const { forgetError, } = useSelector(state => ({
    forgetError: state.ForgetPassword.forgetError,
  }));

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="bx bx-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-softbg-soft-primary">
                  <Row>
                    <Col xs={7}>
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue to Skote.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logo}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    {forgetFailMsg && forgetFailMsg ? (
                      <Alert color="danger" style={{ marginTop: "13px" }}>
                        {"Token invalid or expired!"}
                      </Alert>
                    ) : null}
                    {forgetSuccessMsg ? (
                      <Alert color="success" style={{ marginTop: "13px" }}>
                        {forgetSuccessMsg}
                      </Alert>
                    ) : null}
                    {(!tokenValid) ? <Alert color="danger" style={{ marginTop: "13px" }}>
                    {"Token invalid or expired!"}
                    </Alert> : (!success ? <Form
                      form={form}
                      name="register"
                      onFinish={onFinish}
                      scrollToFirstError
                    >
                      <Form.Item
                        name="password"
                        label={props.t("New Password")}
                        rules={[
                          {
                            required: true,
                            message: props.t("Please input your new password!"),
                          },
                        ]}
                        hasFeedback
                      >
                        <Input.Password />
                      </Form.Item>

                      <Form.Item
                        name="confirm"
                        label={props.t("Confirm Password")}
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: props.t("Please input your password again!"),
                          },
                          ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                              }
                              return Promise.reject(new Error(props.t("The two passwords that you entered do not match!")));
                            },
                          }),
                        ]}
                      >
                        <Input.Password />
                      </Form.Item>
                      <Form.Item
                        wrapperCol={{
                          offset: 10,
                          span: 16,
                        }}
                      >
                        <Button type="primary" htmlType="submit">
                        {props.t("Change")}
                        </Button>
                      </Form.Item>
                    </Form> : <Alert color="success" style={{ marginTop: "13px" }}>
                    {props.t("Well done!")}
                    </Alert>)}

                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                {props.t("Go back to")}
                  <Link to="login" className="font-weight-medium text-primary">
                  {props.t("Login")}
                  </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by TCG Web & Marketing
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

ResetPassword.propTypes = {
  history: PropTypes.object,
};

export default withRouter(withTranslation()(ResetPassword));
