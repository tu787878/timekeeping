import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { GET_STAFFS, GET_TEAMS, GET_PROJECTS, UPLOAD_FILE_MULTI } from "../../../helpers/url_helper";
import { del, get, post, put } from "../../../helpers/api_helper";
//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";
import { Card } from 'antd';
//redux
import { useSelector, useDispatch } from "react-redux";
export const EDIT_PROFILE = "EDIT_PROFILE"
import { Button, Form, Input, Select, Upload, message, Avatar, List, Tooltip, Typography } from 'antd';

import { InboxOutlined, UploadOutlined, CopyOutlined } from '@ant-design/icons';

const { Option } = Select;
const ProjectsOverview = () => {
  const [teams, setTeams] = useState([])
  const [staffs, setStaffs] = useState([])

  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [team, setTeam] = useState(null)
  const [accounts, setAccounts] = useState(null)

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
    get(GET_TEAMS).then(data => {
      setTeams(data.data);
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
          let data = {
            name: values.name,
            description: values.description,
            media: res.map(r => {
              return {
                link: r
              }
            }),
            team: team ? { id: team } : null,
            accounts: accounts ? accounts.map(acc => { return { id: acc } }) : null
          }
          post(GET_PROJECTS, data)
            .then((res) => {
              console.log(res);
              success()
            });
          console.log(data);
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
        team: team ? { id: team } : null,
        accounts: accounts ? accounts.map(acc => { return { id: acc } }) : null
      }
      post(GET_PROJECTS, data)
        .then((res) => {
          console.log(res);
          success()
        });
      console.log(data);
    }

    console.log(values);
  };

  const data3 = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
  const data2 = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

  //meta title
  document.title = "Project Overview | Skote - React Admin & Dashboard Template";

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Projects" breadcrumbItem="Project Overview" />
          <Row>
            <Col lg="8">
              <Card
                title="Project"
                extra={<a href="#">Save</a>}

              >
                <Form name="nest-messages" onFinish={onFinish}>
                  <Form.Item
                    name={['name']}
                    label="Name"
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item label="Status" >
                    <Select
                      style={{
                        width: 120,
                      }}
                      defaultValue={"TODO"}
                    >
                      <Option key={"TODO"}>{"Todo"}</Option>
                      <Option key={"PROCESSING"}>{"Processing"}</Option>
                      <Option key={"DONE"}>{"Done"}</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item label="Assign to Team" >
                    <Select
                      style={{
                        width: 120,
                      }}
                      allowClear
                      onChange={(team) => { setTeam(team) }}
                    >
                      {teams.map(option => (
                        <Option key={option.id}>{option.name}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item label="Assign to Users">
                    <Select
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
                  <Form.Item label="Documents">
                    <Upload {...props} multiple>
                      <Button icon={<UploadOutlined />}>Select File</Button>
                    </Upload>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
            <Col lg="4">
              <Card
                title="Comments"
              >
                <List
                  itemLayout="horizontal"
                  dataSource={data2}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      />
                    </List.Item>
                  )}
                />
              </Card>
              <Input.Group compact>
                <Input.TextArea style={{
                }} />
                <Button type="primary">Send</Button>
              </Input.Group>
            </Col>
          </Row>
          <br />
          <Row>
            <Col lg="8">
              <List
                header={<div>History</div>}
                bordered
                dataSource={data3}
                renderItem={(item) => (
                  <List.Item>
                    <Typography.Text mark>[ITEM]</Typography.Text> {item}
                  </List.Item>
                )}
              />
            </Col>

          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

ProjectsOverview.propTypes = {
  match: PropTypes.object,
};

export default withRouter(ProjectsOverview);
