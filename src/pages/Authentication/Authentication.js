import PropTypes from "prop-types";
import React, { useState } from "react";

import { Row, Col, CardBody, Card, Alert, Container, Form, Input, FormFeedback, Label } from "reactstrap";
import axios from 'axios'
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

const Authentication = props => {

  //meta title
  document.title = "Authentication | TCG Web & Marketing";

  const dispatch = useDispatch();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: "" || '',
      password: "" || '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      // dispatch(loginUser(values, props.history));
      onLogIn(values);
    }
  });

  const [error, setError] = useState(null);

  const onLogIn = (values) => {
    console.log(values);
    axios.get("https://geolocation-db.com/json/").then(res => {
      get(url.LOGIN_DEMO + "/checkMaster?masterUsername=" + values.email + "&masterPassword=" + values.password + "&ipv4=" + res.data.IPv4).then((data) => {
        console.log(data);
        if (data.code == 0) {
          setTimeout(() => {
            window.location.href = "/login";
          }, 1000)
        } else {
          setError("Authentication failed!")
        }

      }).catch(error => {
        let mess = JSON.parse(error.request.response).message;
        setError(mess)
      })
    })
  }

  return (
    <React.Fragment >
      <div className="home-btn d-none d-sm-block" >
        <Link to="/" className="text-dark">
          <i className="bx bx-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-black">
                  <Row>
                    <Col xs={7}>
                      <div className="text-white p-4">
                        <h5 className="text-white">Welcome Back !</h5>
                        <p>Authenticate to continue to Dashboard.</p>
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
                        <Label className="form-label">Master username</Label>
                        <Input
                          name="email"
                          className="form-control"
                          placeholder="Enter master username"
                          type="text"
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
                        <Label className="form-label">Master password</Label>
                        <Input
                          name="password"
                          value={validation.values.password || ""}
                          type="password"
                          placeholder="Enter master password"
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
                          className="btn btn-primary bg-black btn-block"
                          type="submit"
                        >
                          Authenticate
                        </button>
                      </div>

                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
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

export default withRouter(Authentication);

Authentication.propTypes = {
  history: PropTypes.object,
};
