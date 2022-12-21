import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "reactstrap"
import { Card, Tag, Avatar, Tooltip, Divider } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { GET_STAFFS, GET_TEAMS, GET_PROJECTS, UPLOAD_FILE_MULTI, GET_COMMENT, GET_TASKS } from "../../helpers/url_helper";
import { del, get, post, put } from "../../helpers/api_helper";
import Moment from 'react-moment';

const Dashboard = props => {
  //meta title
  document.title = "Dashboard | TCG - Web & Marketing"
  const [tasks, setTasks] = useState([])
  const [projects, setProjects] = useState([])
  const obj = JSON.parse(localStorage.getItem("authUser"))
  const accountId = obj.account.id;
  const onGetNewTask = () => {
    get(GET_TASKS + "?page=0&size=5&accountId=" + accountId).then(data => {
      setTasks(data.data);
    })
  }
  const onGetNewProject = () => {
    get(GET_PROJECTS + "?page=0&size=5&accountId=" + accountId).then(data => {
      setProjects(data.data);
    })
  }
  useEffect(() => {
    onGetNewTask()
    onGetNewProject()
  }, [])

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs
            title={
              (
                <>
                  Dashboard
                </>
              )
            }

            breadcrumbItem="Dashboard"
          />
          <Row>
            <Col md="6">
              <Card
                title={"Projects " + "(" + projects?.data?.length + "/" + projects?.total + ")"}
                extra={(
                  <>
                    <a href="/projects-create">New Project</a>
                  </>
                )}
              >
                {projects?.data?.map((project) => {
                  return (
                    <>
                      <Row>
                        <Col md={"4"}>
                          <a href={"/projects-overview/" + project.id} key={project.id}>{project.status === "TODO" ? <Tag color="purple">TODO</Tag> : (project.status === "DONE" ? <Tag color="cyan">DONE</Tag> : <Tag color="red">PROCESSING</Tag>)}{project.name}</a>
                        </Col>

                        <Col md={"3"}>
                          <Avatar.Group
                            // maxCount={2}
                            size="small"
                            maxStyle={{
                              color: '#f56a00',
                              backgroundColor: '#fde3cf',
                              marginLeft: '10px'
                            }}
                          >
                            {project.accounts?.map(account => {
                              return (
                                <Tooltip key={account.id} title={`${account.userDetail.firstName} ${account.userDetail.lastName}`} placement="top">
                                  {(account.userDetail.avatar !== "") ? <Avatar src={account.userDetail.avatar} /> : <Avatar
                                    style={{
                                      backgroundColor: '#386087',
                                    }}
                                  >
                                    {account.userDetail.lastName.charAt(0)}
                                  </Avatar>}
                                </Tooltip>
                              )
                            })}
                          </Avatar.Group>
                        </Col>
                        <Col md={"3"}>
                          <Moment style={{ marginLeft: "10px" }} fromNow>{project.createdTime}</Moment>
                        </Col>
                      </Row>
                      <Divider />
                      {/* <br></br> */}
                      {/* <br></br> */}
                    </>
                  )
                })}
                <br></br>
                <a href="/tasks-list">View all</a>
              </Card>
            </Col>
            <Col md="6">
              <Card
                title={"Tasks " + "(" + tasks?.data?.length + "/" + tasks?.total + ")"}
                extra={(
                  <>
                    <a href="/tasks-create">New Task</a>
                  </>
                )}
              >
                {tasks?.data?.map((task) => {
                  return (
                    <>
                      <Row>
                        <Col md={"6"}>
                          <a href={"/tasks-overview/" + task.id} key={task.id}>{task.status === "TODO" ? <Tag color="purple">TODO</Tag> : (task.status === "DONE" ? <Tag color="cyan">DONE</Tag> : <Tag color="red">PROCESSING</Tag>)}<Tag color="geekblue">{task.type}</Tag><Tag color="orange">{task.severity}</Tag>{task.name}</a>
                        </Col>
                        <Col md={"3"}>
                          <Avatar.Group
                            // maxCount={2}
                            size="small"
                            maxStyle={{
                              color: '#f56a00',
                              backgroundColor: '#fde3cf',
                              marginLeft: '10px'
                            }}
                          >
                            {task.accounts?.map(account => {
                              return (
                                <Tooltip key={account.id} title={`${account.userDetail.firstName} ${account.userDetail.lastName}`} placement="top">
                                  {(account.userDetail.avatar !== "") ? <Avatar src={account.userDetail.avatar} /> : <Avatar
                                    style={{
                                      backgroundColor: '#386087',
                                    }}
                                  >
                                    {account.userDetail.lastName.charAt(0)}
                                  </Avatar>}
                                </Tooltip>
                              )
                            })}
                          </Avatar.Group>
                        </Col>

                      </Row>


                      <Divider />
                    </>
                  )
                })}
                <br></br>
                <a href="/tasks-list">View all</a>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Dashboard
