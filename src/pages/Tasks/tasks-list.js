import React, { useEffect } from "react"
import { Link, withRouter } from "react-router-dom"
import { Card, CardBody, Col, Container, Row, CardTitle } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import ReactApexChart from "react-apexcharts"

import { getTasks as onGetTasks } from "../../store/tasks/actions"
import { options, series } from "common/data/tasks"

import avatar1 from "../../assets/images/users/avatar-1.jpg"
import avatar2 from "../../assets/images/users/avatar-2.jpg"
import avatar3 from "../../assets/images/users/avatar-3.jpg"
import avatar4 from "../../assets/images/users/avatar-4.jpg"
import avatar5 from "../../assets/images/users/avatar-5.jpg"
import avatar7 from "../../assets/images/users/avatar-7.jpg"
import avatar8 from "../../assets/images/users/avatar-8.jpg"
//redux
import { useSelector, useDispatch } from "react-redux"
import TaskBoard from "./TaskBoard"

const TasksList = () => {
  //meta title
  document.title = "Task List | Skote - React Admin & Dashboard Template"

  const dispatch = useDispatch()

  const { tasks } = useSelector(state => ({
    tasks: state.tasks.tasks,
  }))

  useEffect(() => {
    dispatch(onGetTasks())
  }, [dispatch])

  // const recentTasks = tasks.find(task => task.title === "Recent Tasks")

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Tasks" breadcrumbItem="Task List" />
          {/* Render Breadcrumbs */}
          <Row>
            <Col lg={8}>
              <TaskBoard boardName="Upcoming" />
              <TaskBoard boardName="In Progress" />
              <TaskBoard boardName="Done" />
            </Col>

            <Col lg={4}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Recent Tasks</h4>

                  <div className="table-responsive">
                    <table className="table table-nowrap align-middle mb-0">
                      <tbody>
                        <tr>
                          <td>
                            <h5 className="text-truncate font-size-14 m-0">
                              <Link to="#" className="text-dark">
                                Brand logo design
                              </Link>
                            </h5>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <div className="avatar-group-item">
                                <Link to="#" className="d-inline-block">
                                  <img
                                    src={avatar4}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link to="#" className="d-inline-block">
                                  <img
                                    src={avatar5}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 className="text-truncate font-size-14 m-0">
                              <Link to="#" className="text-dark">
                                Create a Blog Template UI
                              </Link>
                            </h5>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <div className="avatar-group-item">
                                <Link to="#" className="d-inline-block">
                                  <img
                                    src={avatar1}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link to="#" className="d-inline-block">
                                  <img
                                    src={avatar2}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link to="#" className="d-inline-block">
                                  <img
                                    src={avatar3}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link to="#" className="d-inline-block">
                                  <div className="avatar-xs">
                                    <span className="avatar-title rounded-circle bg-info text-white font-size-16">
                                      D
                                    </span>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 className="text-truncate font-size-14 m-0">
                              <Link to="#" className="text-dark">
                                Redesign - Landing page
                              </Link>
                            </h5>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <div className="avatar-group-item">
                                <Link to="#" className="d-inline-block">
                                  <img
                                    src={avatar8}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link to="#" className="d-inline-block">
                                  <img
                                    src={avatar7}
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </Link>
                              </div>
                              <div className="avatar-group-item">
                                <Link to="#" className="d-inline-block">
                                  <div className="avatar-xs">
                                    <span className="avatar-title rounded-circle bg-danger text-white font-size-16">
                                      P
                                    </span>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default withRouter(TasksList)
