import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Button,
} from "reactstrap"
import Select from "react-select"
import classnames from "classnames"
import { Link, withRouter } from "react-router-dom"

//redux
import { connect, useSelector, useDispatch } from "react-redux"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import { getCapabilities } from "store/actions"

import { getTeams as onGetTeams } from "store/admin/team/actions"
import { newStaff as addNewStaff, resetStaff as onResetStaff } from "store/admin/staff/actions"

const NewStaff = props => {
  //meta title
  document.title = "Form Wizard | Skote - React Admin & Dashboard Template"

  const dispatch = useDispatch()

  const { capabilities, onGetCapabilities } = props
  const { addSuccess} = props

  const { teams } = useSelector(state => ({
    teams: state.Teams.teams,
  }))

  const [activeTab, setactiveTab] = useState(1)
  const [activeTabVartical, setoggleTabVertical] = useState(1)

  const [passedSteps, setPassedSteps] = useState([1])
  const [passedStepsVertical, setPassedStepsVertical] = useState([1])

  const [selectedMulti, setselectedMulti] = useState(null)
  const [selectedTeam, setselectedTeam] = useState(null)
  const [selectedRole, setselectedRole] = useState(null)
  const [selectedWorkingType, setWorkingType] = useState(null)

  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [phone, setPhone] = useState(null)
  const [email, setEmail] = useState(null)
  const [jobName, setJobName] = useState(null)
  const [minHours, setMinHours] = useState(null)
  const [maxHours, setMaxHours] = useState(null)
  const [workFrom, setWorkFrom] = useState(null)
  const [workTo, setWorkTo] = useState(null)

  useEffect(() => {
    onGetCapabilities()
  }, [onGetCapabilities])

  useEffect(() => {
    if (teams && !teams.length) {
      dispatch(onGetTeams())
    }
  }, [dispatch, teams])
  const optionGroup = [
    {
      label: "Picnic",
      options: [
        { label: "Mustard", value: "Mustard" },
        { label: "Ketchup", value: "Ketchup" },
        { label: "Relish", value: "Relish" },
      ],
    },
    {
      label: "Camping",
      options: [
        { label: "Tent", value: "Tent" },
        { label: "Flashlight", value: "Flashlight" },
        { label: "Toilet Paper", value: "Toilet Paper" },
        { label: "Toilet Paper", value: "Toilet Paper" },
        { label: "Toilet Paper", value: "Toilet Paper" },
        { label: "Toilet Paper", value: "Toilet Paper" },
        { label: "Toilet Paper", value: "Toilet Paper" },
      ],
    },
  ]

  function toggleTab(tab) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab]
      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab)
        setPassedSteps(modifiedSteps)
      }
    }
  }

  function toggleTabVertical(tab) {
    if (activeTabVartical !== tab) {
      var modifiedSteps = [...passedStepsVertical, tab]

      if (tab >= 1 && tab <= 4) {
        setoggleTabVertical(tab)
        setPassedStepsVertical(modifiedSteps)
        
      }
    }

  }

  function handleClick() {
    let data = {
      firstName: firstName,
      lastName:lastName,
      phone:phone,
      email:email,
      role: selectedRole,
      capabilities: selectedMulti?.map(e => e.value),
      jobName: jobName,
      team: selectedTeam?.id,
      minHours: minHours,
      maxHours: maxHours,
      workingType: selectedWorkingType,
      workFrom: workFrom,
      workTo: workTo
    }

    console.log(data);
    dispatch(addNewStaff(data));
  }

  function toggleNormal(e) {
    if (!e.target.checked) setselectedMulti([])
    else {
      capabilities.forEach(element => {
        if (element.label === "normal") {
          setselectedMulti(element.options)
        }
      })
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Form Wizard" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">New Staff Wizard</h4>
                  <div className="vertical-wizard wizard clearfix vertical">
                    <div className="steps clearfix">
                      <ul>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 1,
                          })}
                        >
                          <NavLink
                            className={classnames({
                              active: activeTabVartical === 1,
                            })}
                            onClick={() => {
                              toggleTabVertical(1)
                            }}
                            disabled={!(passedStepsVertical || []).includes(1)}
                          >
                            <span className="number">1.</span> Account
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 2,
                          })}
                        >
                          <NavLink
                            className={classnames({
                              active: activeTabVartical === 2,
                            })}
                            onClick={() => {
                              toggleTabVertical(2)
                            }}
                            disabled={!(passedStepsVertical || []).includes(2)}
                          >
                            <span className="number">2.</span>{" "}
                            <span>Role And Capabilities</span>
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 3,
                          })}
                        >
                          <NavLink
                            className={
                              (classnames({
                                active: activeTabVartical === 3,
                              }),
                              "done")
                            }
                            onClick={() => {
                              toggleTabVertical(3)
                            }}
                            disabled={!(passedStepsVertical || []).includes(3)}
                          >
                            <span className="number">3.</span>Job Details
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 4,
                          })}
                        >
                          <NavLink
                            className={
                              (classnames({
                                active: activeTabVartical === 4,
                              }),
                              "done")
                            }
                            onClick={() => {
                              toggleTabVertical(4)
                            }}
                            disabled={!(passedStepsVertical || []).includes(4)}
                          >
                            <span className="number">4.</span> Confirm
                          </NavLink>
                        </NavItem>
                      </ul>
                    </div>
                    <div className="content clearfix">
                      <TabContent
                        activeTab={activeTabVartical}
                        className="body"
                      >
                        <TabPane tabId={1}>
                          <Form>
                            <Row>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="firstName">
                                    First name
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder="Enter Your First Name"
                                    onChange={e=>{setFirstName(e.target.value)}}
                                  />
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="lastName">
                                    Last name
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder="Enter Your Last Name"
                                    onChange={e=>{setLastName(e.target.value)}}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="phone">
                                    Phone
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    placeholder="Enter Your Phone No."
                                    onChange={e=>{setPhone(e.target.value)}}
                                  />
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="email">
                                    Email
                                  </Label>
                                  <Input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter Your Email ID"
                                    onChange={e=>{setEmail(e.target.value)}}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Form>
                        </TabPane>
                        <TabPane tabId={2}>
                          <div>
                            <Form>
                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label>Role</Label>
                                    <select onChange={(selectedMulti) => {
                                      setselectedRole(selectedMulti.target.value);
                                    }} id="role" className="form-select">
                                      <option>Select Role</option>
                                      <option value="0">Admin</option>
                                      <option value="2">Employee</option>
                                    </select>
                                  </FormGroup>
                                </Col>

                                <Col lg="6">
                                  <label className="control-label">
                                    Capabilities
                                    <div className="form-check mb-3">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="toggleNormal"
                                        onChange={e => {
                                          {
                                            toggleNormal(e)
                                          }
                                        }}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="defaultCheck1"
                                      >
                                        All normal capabilities
                                      </label>
                                    </div>
                                  </label>
                                  <Select
                                    value={selectedMulti}
                                    isMulti={true}
                                    onChange={(selectedMulti) => {
                                      setselectedMulti(selectedMulti)
                                    }}
                                    options={capabilities}
                                    className="select2-selection"
                                  />
                                </Col>
                              </Row>
                            </Form>
                          </div>
                        </TabPane>
                        <TabPane tabId={3}>
                          <div>
                            <Form>
                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-namecard-input112">
                                      Job name
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-namecard-input112"
                                      placeholder="Enter the job name"
                                      onChange={e=>{setJobName(e.target.value)}}
                                    />
                                  </FormGroup>
                                </Col>

                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label>Team</Label>
                                    <Select
                                      value={selectedTeam}
                                      onChange={(selectedTeam) => {
                                        setselectedTeam(selectedTeam)
                                      }}
                                      options={teams}
                                      getOptionLabel={option => option.name}
                                      getOptionValue={option => option.id}
                                      className="select2-selection"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="minHours">
                                      Min hours
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="minHours"
                                      placeholder="Enter min working hours"
                                      onChange={e=>{setMinHours(e.target.value)}}
                                    />
                                  </FormGroup>
                                </Col>

                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="maxHours">
                                      Max hours
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="maxHours"
                                      placeholder="Enter max working hours"
                                      onChange={e=>{setMaxHours(e.target.value)}}
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="workingType">
                                      Working Type
                                    </Label>
                                    <select onChange={e=>{setWorkingType(e.target.value)}} id="workingType" className="form-select">
                                      <option>Select Type</option>
                                      <option value="0">Day</option>
                                      <option value="1">Week</option>
                                      <option value="2">Month</option>
                                    </select>
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <label
                                      htmlFor="workFrom"
                                      className="col-md-2 col-form-label"
                                    >
                                      From
                                    </label>
                                    <div className="col-md-10">
                                      <input
                                        className="form-control"
                                        type="date"
                                        id="workFrom"
                                        onChange={e=>{setWorkFrom(e.target.value)}}
                                      />
                                    </div>
                                  </FormGroup>
                                </Col>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <label
                                      htmlFor="workTo"
                                      className="col-md-2 col-form-label"
                                    >
                                      To
                                    </label>
                                    <div className="col-md-10">
                                      <input
                                        className="form-control"
                                        type="date"
                                        id="workTo"
                                        onChange={e=>{setWorkTo(e.target.value)}}
                                      />
                                    </div>
                                  </FormGroup>
                                </Col>
                              </Row>
                            </Form>
                          </div>
                        </TabPane>
                        <TabPane tabId={4}>
                          <div className="row justify-content-center">
                            <Col lg="6">
                              <div className="text-center">
                                <div className="mb-4">
                                  {addSuccess.code  ? (addSuccess.message == "success" ? <i className="mdi mdi-check-circle-outline text-success display-4" /> :
                                  <i className="mdi mdi-check-circle-outline text-danger display-4"/>) : <i className="mdi mdi-check-circle-outline display-4" />}
                                </div>
                                <div>
                                  <h5>Add a new Employee</h5>
                                  {addSuccess.code != 0 ?  <p className="text-danger">
                                   {addSuccess.message}
                                  </p>: <p className="text-success">
                                   {addSuccess.message}
                                  </p>}
                                  {addSuccess.code ? (addSuccess.code != 0 ?
                                  <Button onClick={handleClick} className="btn-success">
                                    Confirm
                                  </Button>
                                  :
                                  <p className="text-success">
                                   Reload load click back to create another employee.
                                  </p>) : <Button onClick={handleClick} className="btn-success">
                                  Confirm
                                </Button>
                                  }
                                </div>
                              </div>
                            </Col>
                          </div>
                        </TabPane>
                      </TabContent>
                    </div>
                    <div className="actions clearfix">
                      <ul>
                        <li
                          className={
                            activeTabVartical === 1
                              ? "previous disabled"
                              : "previous"
                          }
                        >
                          <Link
                            to="#"
                            onClick={() => {
                              dispatch(onResetStaff());
                              toggleTabVertical(activeTabVartical - 1)
                            }}
                          >
                            Previous
                          </Link>
                        </li>
                        <li
                          className={
                            activeTabVartical === 4 ? "next disabled" : "next"
                          }
                        >
                          <Link
                            to="#"
                            onClick={() => {
                              toggleTabVertical(activeTabVartical + 1)
                            }}
                          >
                            Next
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

NewStaff.propTypes = {
  capabilities: PropTypes.any,
  onGetCapabilities: PropTypes.func,
  addSuccess: PropTypes.any,
}

const mapStateToProps = ({ Capabilities, Staffs }) => ({
  capabilities: Capabilities.capabilities,
  addSuccess: Staffs.staff,
})

const mapDispatchToProps = dispatch => ({
  onGetCapabilities: () => dispatch(getCapabilities()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NewStaff))
