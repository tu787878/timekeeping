import PropTypes from "prop-types";
import React, { useState } from "react";
import { withTranslation } from "react-i18next";

import { Row, Col, CardBody, Card, Alert, Container, Form, Input, FormFeedback, Label } from "reactstrap";

//redux
import { useSelector, useDispatch } from "react-redux";

import { withRouter, Link } from "react-router-dom";
import { get, post } from "../../helpers/api_helper"
import * as url from "../../helpers/url_helper"
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
// actions

// import images
import profile from "assets/images/profile-img.png";
import logo from "assets/images/logo.svg";

const Login = props => {

  //meta title
  document.title = "Login | TCG Web & Marketing";

  const dispatch = useDispatch();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: "" || '',
      password: "" || '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required(props.t("Please Enter Your Email")),
      password: Yup.string().required(props.t("Please Enter Your Password")),
    }),
    onSubmit: (values) => {
      // dispatch(loginUser(values, props.history));
      onLogIn(values);
    }
  });

  const [error, setError] = useState(null);

  const onLogIn = (values) => {
    let d = {
      username: values.email,
      password: values.password
    }
    post(url.LOGIN_DEMO, d).then((data) => {
      localStorage.setItem("authUser", JSON.stringify(data.data));
      // props.history.push("/dashboard")
      setTimeout(()=>{
        window.location.href = "/dashboard";
    }, 1000)
    }).catch(error => {
      let mess = JSON.parse(error.request.response).message;
      setError(mess)
    })
  }

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
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col xs={7}>
                      <div className="text-primary p-4">
                        <h5 className="text-primary">{props.t("Welcome Back !")}</h5>
                        <p>{props.t("Sign in to continue to Dashboard.")}</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/" className="auth-logo-light">
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
                    <Form
                      className="form-horizontal"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      {error ? <Alert color="danger">{error}</Alert> : null}

                      <div className="mb-3">
                        <Label className="form-label">{props.t("Email")}</Label>
                        <Input
                          name="email"
                          className="form-control"
                          placeholder={props.t("Enter email")}
                          type="email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email ? true : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">{props.t("Password")}</Label>
                        <Input
                          name="password"
                          value={validation.values.password || ""}
                          type="password"
                          placeholder="Enter Password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.password && validation.errors.password ? true : false
                          }
                        />
                        {validation.touched.password && validation.errors.password ? (
                          <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                        ) : null}
                      </div>
                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary btn-block"
                          type="submit"
                        >
                          {props.t("Log In")}
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-muted">
                          <i className="mdi mdi-lock me-1" />
                          {props.t("Forgot your password?")}
                        </Link>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  © {new Date().getFullYear()} {props.t("Crafted with")}{" "}
                  <i className="mdi mdi-heart text-danger" /> {props.t("by")} TCG Web & Marketing
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(withTranslation()(Login));

Login.propTypes = {
  history: PropTypes.object,
};
