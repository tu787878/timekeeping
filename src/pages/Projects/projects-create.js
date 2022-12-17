import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

import "react-datepicker/dist/react-datepicker.css";
import { GET_STAFFS, GET_TEAMS, GET_PROJECTS, UPLOAD_FILE_MULTI } from "../../helpers/url_helper";
import { del, get, post, put } from "../../helpers/api_helper";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';

import { Button, Form, Input, Select, Upload, message } from 'antd';
import team from "pages/admin/team";

const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const normFile = (e) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const ProjectsCreate = () => {

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
            media: res,
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
  //meta title
  document.title = "Create New Project | Skote - React Admin & Dashboard Template";

  return (
    <React.Fragment>
       {contextHolder}
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Projects" breadcrumbItem="Create New" />
          <Row>
            <Col lg="12">
              <Form labelCol={{ span: 3 }} name="nest-messages" onFinish={onFinish}>
                <Form.Item
                  name={['name']}
                  label="Name"
                >
                  <Input />
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
                <Form.Item
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ProjectsCreate;
