import React from "react"
import PropTypes from "prop-types"
import "flatpickr/dist/themes/material_blue.css"
import Flatpickr from "react-flatpickr"
import {
  Card,
  CardBody,
  Col,
  Container,
  Label,
  Row,
  FormGroup,
  InputGroup,
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import profile1 from "assets/images/profile-img.png"
import TimeLogsTable from "./TimeLogsTable"

const Calender = () => {
  //meta title
  document.title = "Full Calendar | Skote - React Admin & Dashboard Template"

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Calendar" breadcrumbItem="Full Calendar" />
          <Row>
            <Col>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col xs="7">
                      <div className="text-primary p-3">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>It will seem like simplified</p>
                      </div>
                    </Col>
                    <Col xs="5" className="align-self-end">
                      <img src={profile1} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <Row className="align-items-center">
                    <Col sm="4">
                      <div className="avatar-md profile-user-wid mb-4">
                        <img
                          src="/static/media/avatar-1.3921191a8acf79d3e907.jpg"
                          alt=""
                          className="img-thumbnail rounded-circle"
                        />
                      </div>
                      <h5 className="font-size-15 text-truncate">
                        Van Tu Nguyen
                      </h5>
                      <p className="text-muted mb-0 text-truncate">Coder</p>
                    </Col>
                    <Col>
                      <FormGroup className="mb-4">
                        <Label>Date Range</Label>
                        <InputGroup>
                          <Flatpickr
                            className="form-control d-block"
                            placeholder="Select range"
                            options={{
                              mode: "range",
                              dateFormat: "Y-m-d",
                            }}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col className="d-flex justify-content-end">
                      {/* <Dropdown
                        direction="right"
                        className="btn-group dropend"
                      >
                        <DropdownToggle className="btn btn-danger" caret>
                          Exportieren <i className="mdi mdi-chevron-right" />
                        </DropdownToggle>
                        <DropdownMenu data-popper-placement="right-start">
                          <DropdownItem>PDF exportieren</DropdownItem>
                          <DropdownItem>Excel exportieren</DropdownItem>
                        </DropdownMenu>
                      </Dropdown> */}
                    </Col>
                  </Row>
                  <Row
                    style={{ marginTop: 15 }}
                    className="d-flex justify-content-end"
                  >
                    <Col>
                      <div className="rounded overflow-hidden">
                        <div className="bg-info p-4 bg-soft">
                          <h5 className="my-2 text-info">Work hours: 35</h5>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="rounded overflow-hidden">
                        <div className="bg-warning p-4 bg-soft">
                          <h5 className="my-2 text-warning">Paid absence: 7</h5>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="rounded overflow-hidden">
                        <div className="bg-success p-4 bg-soft">
                          <h5 className="my-2 text-success">Total: 42</h5>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="rounded overflow-hidden">
                        <div className="bg-danger p-4 bg-soft">
                          <h5 className="my-2 text-danger">Regular: 40</h5>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="rounded overflow-hidden">
                        <div className="bg-primary p-4 bg-soft">
                          <h5 className="my-2 text-primary">Overtime: 2</h5>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <TimeLogsTable />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Calender.propTypes = {
  events: PropTypes.array,
  categories: PropTypes.array,
  className: PropTypes.string,
  onGetEvents: PropTypes.func,
  onAddNewEvent: PropTypes.func,
  onUpdateEvent: PropTypes.func,
  onDeleteEvent: PropTypes.func,
  onGetCategories: PropTypes.func,
}

export default Calender
