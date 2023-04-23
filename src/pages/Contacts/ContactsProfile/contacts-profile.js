import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
  Table,
} from "reactstrap";

// TableContainer
import { useParams } from "react-router-dom";
import { Avatar } from "antd";

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";

//Import Images
import profile1 from "assets/images/profile-img.png";

// import charts
import { getUserProfile } from "store/actions";
import { get, del } from "../../../helpers/api_helper"
import * as url from "../../../helpers/url_helper"
const ContactsProfile = props => {

  //meta title
  document.title = "Profile | TCG Web & Marketing";

  const { userProfile, onGetUserProfile } = props;
  // eslint-disable-next-line no-unused-vars
  const [miniCards, setMiniCards] = useState([
    {
      title: "Completed Projects",
      iconClass: "bx-check-circle",
      text: "125",
    },
    { title: "Pending Projects", iconClass: "bx-hourglass", text: "12" },
    { title: "Total Revenue", iconClass: "bx-package", text: "$36,524" },
  ]);

  const [info, setInfo] = useState(null);

  // useEffect(() => {
  //   onGetUserProfile();
  // }, [onGetUserProfile]);
  const { id } = useParams()


  const getUser = () => {
    let u = url.GET_STAFFS + "/" + (id ? id : -1);
    get(u).then((data) => {
      console.log(data.data);
      setInfo(data.data)
    })
  }


  useEffect(() => {
    getUser()
  }, [])

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Staffs" breadcrumbItem="Profile" />

          <Row>
            <Col xl="12">
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col xs="7">
                      <div className="text-primary p-3">
                        <h5 className="text-primary">Hi, What's up!</h5>
                        <p>It will seem like simplified</p>
                      </div>
                    </Col>
                    <Col xs="5" className="align-self-end">
                      <img src={profile1} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <Row>
                    <Col sm="4">
                      <div className="avatar-md profile-user-wid mb-4">
                        {(info?.userDetail.avatar !== "") ? <Avatar src={info?.userDetail.avatar} /> : <div className="avatar-md">
                          <span className="avatar-title rounded-circle bg-info text-white font-size-24">
                            {info?.userDetail.lastName.charAt(0)}
                          </span>
                        </div>}
                      </div>
                      <h5 className="font-size-15 text-truncate">
                        {info?.userDetail?.firstName} {info?.userDetail?.lastName}
                      </h5>
                      <p className="text-muted mb-0 text-truncate">
                        {info?.designation}
                      </p>
                    </Col>

                    <Col sm={8}>
                      <div className="pt-4">
                        <Row>
                          <Col xs="8">
                          <p className="text-muted mb-0">Email</p>
                            <h5 className="font-size-12">
                              {info?.userDetail.email}
                            </h5>
                            
                          </Col>
                          
                        </Row>
                        {!id ? <div className="mt-4">
                          <Link to="/edit-profile" className="btn btn-primary  btn-sm">
                            Edit Profile{" "}
                            <i className="mdi mdi-arrow-right ms-1" />
                          </Link>
                        </div> : null}

                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Personal Information</CardTitle>
                  <p className="text-muted mb-4">
                    {userProfile.personalDetail}
                  </p>
                  <div className="table-responsive">
                    <Table className="table-nowrap mb-0">
                      <tbody>
                        <tr>
                          <th scope="row">Full Name :</th>
                          <td>{info?.userDetail.firstName} {info?.userDetail?.lastName}</td>
                        </tr>
                        <tr>
                          <th scope="row">Mobile :</th>
                          <td>{info?.userDetail?.phone}</td>
                        </tr>
                        <tr>
                          <th scope="row">E-mail :</th>
                          <td>{info?.userDetail?.email}</td>
                        </tr>
                        <tr>
                          <th scope="row">Location :</th>
                          <td>{info?.userDetail?.address}</td>
                        </tr>
                        <tr>
                          <th scope="row">Insurance Provider :</th>
                          <td>{info?.userDetail?.insuranceProvider}</td>
                        </tr>
                        <tr>
                          <th scope="row">Insurance number :</th>
                          <td>{info?.userDetail?.insuranceNumber}</td>
                        </tr>
                        <tr>
                          <th scope="row">Rentensnummer :</th>
                          <td>{info?.userDetail?.rentenNumber}</td>
                        </tr>
                        <tr>
                          <th scope="row">Residence permit :</th>
                          <td>{info?.userDetail?.residencePermit == "UNLIMIT" ? "Permanent" : (info?.userDetail?.residencePermit == "LIMIT" ? "Temporary" : "")}</td>
                        </tr>
                        <tr>
                          <th scope="row">Residence permit until :</th>
                          <td>{info?.userDetail?.residencePermitDate}</td>
                        </tr>
                        <tr>
                          <th scope="row">Tax number :</th>
                          <td>{info?.userDetail?.taxNumber}</td>
                        </tr>
                        <tr>
                          <th scope="row">Passport number :</th>
                          <td>{info?.userDetail?.passport}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

ContactsProfile.propTypes = {
  userProfile: PropTypes.any,
  onGetUserProfile: PropTypes.func,
};

const mapStateToProps = ({ contacts }) => ({
  userProfile: contacts.userProfile,
});

const mapDispatchToProps = dispatch => ({
  onGetUserProfile: (id) => dispatch(getUserProfile(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactsProfile));
