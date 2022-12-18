import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { GET_STAFFS, GET_TEAMS, GET_PROJECTS, UPLOAD_FILE_MULTI, GET_COMMENT, GET_TASKS } from "../../helpers/url_helper";
import { del, get, post, put } from "../../helpers/api_helper";
//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";
import { Card } from 'antd';
//redux
import { useSelector, useDispatch } from "react-redux";
export const EDIT_PROFILE = "EDIT_PROFILE"
import { Button, Form, Input, Select, Upload, message, Avatar, List, Timeline, Badge, Tag, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import Moment from 'react-moment';
import { InboxOutlined, UploadOutlined, DeleteTwoTone } from '@ant-design/icons';
import { useParams } from "react-router-dom";
const { Option } = Select;
const TasksOverview = () => {
  const [teams, setTeams] = useState([])
  const [staffs, setStaffs] = useState([])
  const [project, setProject] = useState(null)
  const [tasks, setTasks] = useState([])

  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [team, setTeam] = useState(null)
  const [accounts, setAccounts] = useState(null)
  const [oldMedia, setOldMedia] = useState(null)
  const [comment, setComment] = useState(null)
  const [commenting, setCommenting] = useState(null)

  const { id } = useParams()

  const [form] = Form.useForm()
  const [form2] = Form.useForm()

  const obj = JSON.parse(localStorage.getItem("authUser"))
  const accountId = obj.account.id;

  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };


  const onGetTeams = () => {
    get(GET_PROJECTS + "/all").then(data => {
      setTeams(data.data);
    })
  }

  const onGetNewTask = () => {
    get(GET_TASKS + "?page=0&size=5&projectId=" + id).then(data => {
      setTasks(data.data);
    })
  }

  const onGetProject = () => {
    get(GET_TASKS + "/" + id).then(data => {
      console.log(data.data);
      setProject(data.data)

      let acc = data.data.accounts.map((a) => {
        return a.id;
      });
      setAccounts(acc);
      setOldMedia(data.data.media);
      setTeam(data.data.project.id);
    })
  }

  const onGetStaffs = () => {
    get(GET_STAFFS).then(data => {
      setStaffs(data.data);
    })
  }
  useEffect(() => {
    onGetTeams()
    onGetStaffs()
  }, [])
  useEffect(() => {
    onGetProject()
  }, [id])

  useEffect(() => {
    form.setFieldsValue(project)
  }, [form, project])

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.success('Add a team success!');
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Upload failed',
    });
  };

  const onFinish = (values) => {
    const formData = new FormData();
    if (fileList.length > 0) {
      fileList.forEach((file) => {
        formData.append('files', file);
      });
      console.log(formData);
      setUploading(true);
      // You can use any AJAX library you like
      fetch(UPLOAD_FILE_MULTI, {
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setFileList([]);
          res = res.concat(oldMedia);
          let data = {
            name: values.name,
            description: values.description,
            media: res,
            project: team ? { id: team } : null,
            accounts: accounts ? accounts.map(acc => { return { id: acc } }) : null,
            status: values.status,
            type: values.type,
            severity: values.severity
          }
          console.log(data);
          put(GET_TASKS + "/" + id, data)
            .then((res) => {
              console.log(res);
              success()
              onGetProject()
            });

        })
        .catch(() => {
          error();
          // message.error('upload failed.');
        })
        .finally(() => {
          setUploading(false);
        });
    }
    else {
      let data = {
        name: values.name,
        description: values.description,
        media: oldMedia,
        project: team ? { id: team } : null,
        accounts: accounts ? accounts.map(acc => { return { id: acc } }) : null,
        status: values.status,
        type: values.type,
        severity: values.severity
      }
      console.log(data);
      put(GET_TASKS + "/" + id, data)
        .then((res) => {
          console.log(res);
          success()
          onGetProject()
        });

    }

    console.log(values);
  };

  const handleClose = (media) => {
    setOldMedia(oldMedia.filter(obj => {
      return obj.id != media.id;
    }));
  };

  const onChangeComment = (ev) => {
    setComment(ev.target.value);
  }

  const doComment = () => {
    console.log(comment);
    let dt = {
      "content": comment
    }
    post(GET_TASKS + "/" + id + "/comments", dt)
      .then((res) => {
        console.log(res);
        onGetProject()
      });

    setComment(null)
    form2.resetFields();
  }

  const deleteComment = (item) => {
    del(GET_COMMENT + "/" + item.id)
      .then((res) => {
        console.log(res);
        onGetProject()
      });
  }

  //meta title
  document.title = "Project Overview | Skote - React Admin & Dashboard Template";

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Tasks" breadcrumbItem="Task Overview" />
          <Row>
            <Col lg="8">
              <Row>
                <Badge.Ribbon text={project?.status} color={project?.status === "DONE" ? "cyan" : (project?.status === "TODO" ? "" : "red")}>

                  <Card
                    title="Task"

                  >
                    <Form form={form} name="nest-messages" onFinish={onFinish} initialValues={project}>
                      <Form.Item
                        name={['name']}
                        label="Name"

                      >
                        <Input />
                      </Form.Item>
                      <Form.Item name={"status"} label="Status" >
                        <Select
                          style={{
                            width: 120,
                          }}
                        >
                          <Option key={"TODO"}>{"Todo"}</Option>
                          <Option key={"PROCESSING"}>{"Processing"}</Option>
                          <Option key={"DONE"}>{"Done"}</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item name={"type"} label="Type" >
                        <Select
                          style={{
                            width: 120,
                          }}
                        >
                          <Option key="BUGS">Bugs</Option>
                          <Option key="FEATURES">Features</Option>
                          <Option key="TODO">Todo</Option>
                          <Option key="OTHERS">Others</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item name={"severity"} label="Severity" >
                        <Select
                          style={{
                            width: 120,
                          }}
                        >
                          <Option key="LOW">Low</Option>
                          <Option key="MEDIUM">Medium</Option>
                          <Option key="HIGH">High</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item name={['project', 'id']} label="Assign to Project" >
                        <Select
                          style={{
                            width: 120,
                          }}
                          allowClear
                          onChange={(team) => { setTeam(team) }}
                        >
                          {teams.map(option => (
                            <Option key={option.id} value={option.id}>{option.name}</Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <Form.Item label="Assign to Users" >
                        <Select
                          value={accounts}
                          mode="multiple"
                          style={{
                            width: '100%',
                          }}
                          allowClear
                          onChange={(accounts) => { setAccounts(accounts) }}
                        >
                          {staffs.map(staff => {
                            return (
                              <Option key={staff.id} value={staff.id}>
                                <div className="demo-option-label-item">
                                  {staff.userDetail.firstName} {staff.userDetail.lastName} ({staff.username})
                                </div>
                              </Option>
                            )
                          })}

                        </Select>
                      </Form.Item>
                      <Form.Item name={['description']} label="Description">
                        <Input.TextArea rows={6} />
                      </Form.Item>
                      {oldMedia?.map((med) => {
                        return (
                          <>
                            <a key={"link" + med.id} href={med.link}><Tag>{med.title}</Tag></a><a key={"icon" + med.id} onClick={() => handleClose(med)}><DeleteTwoTone twoToneColor={"red"} /></a>
                            <br></br>
                            <br></br>
                          </>
                        )
                      })}
                      <Form.Item label="Documents">
                        <Upload {...props} multiple>
                          <Button icon={<UploadOutlined />}>Select File</Button>
                        </Upload>
                      </Form.Item>
                      <Form.Item
                        wrapperCol={{
                          offset: 8,
                          span: 16,
                        }}
                      >
                        <Button type="primary" htmlType="submit">
                          Save
                        </Button>
                      </Form.Item>
                    </Form>
                  </Card>
                </Badge.Ribbon>
              </Row>
              <br></br>
              <Row>
                <Col lg="8">
                  <Timeline>
                    {project?.histories.map((history) => {
                      return (
                        <Timeline.Item key={history.id}>{history.message} at {<Moment format="HH:mm DD-MM-YYYY">{history.createdTime}</Moment>}.</Timeline.Item>
                      )
                    })}

                  </Timeline>
                </Col>

              </Row>
            </Col>

            <Col lg="4">
              <Row>

                <Card
                  title="Comments"
                >
                  <List
                    itemLayout="horizontal"
                    dataSource={project?.comments}
                    renderItem={(item) => (
                      <>
                        <List.Item>
                          <List.Item.Meta
                            avatar={(item.createdBy.userDetail.avatar !== "") ? <Avatar src={item.createdBy.userDetail.avatar} /> : <div className="avatar-xs">
                              <span className="avatar-title rounded-circle bg-info text-white font-size-16">
                                {item.createdBy.userDetail.lastName.charAt(0)}
                              </span>
                            </div>}
                            title={
                              <>
                                <Layout>
                                  <Content style={{ backgroundColor: "white" }}><a>{item.createdBy.userDetail.firstName} {item.createdBy.userDetail.lastName}</a></Content>
                                  <Sider style={{ backgroundColor: "white" }}><Moment style={{ alignItems: "left", fontSize: "13px" }} format="HH:mm DD/MM/YYYY">{item.createdTime}</Moment></Sider>
                                  {item.createdBy.id === accountId ? <DeleteTwoTone onClick={() => { deleteComment(item) }} style={{ backgroundColor: "white" }} twoToneColor="red" /> : null}
                                </Layout>

                              </>
                            }
                            description={item.content}
                          />

                        </List.Item>

                      </>
                    )}
                  />
                  <br />
                  <Form form={form2} initialValues={{ "chat": "ssd" }}>
                    <Form.Item name="chat">
                      <Input.Group compact>
                        <Input onChange={onChangeComment} style={{ width: 'calc(100% - 100px)', }} />
                        <Button onClick={doComment} type="primary">Send</Button>
                      </Input.Group>
                    </Form.Item>
                  </Form>

                </Card>

              </Row>
            </Col>
          </Row>
          <br />

        </Container>
      </div>
    </React.Fragment >
  );
};

TasksOverview.propTypes = {
  match: PropTypes.object,
};

export default withRouter(TasksOverview);