import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

import "react-datepicker/dist/react-datepicker.css";
import { GET_STAFFS, GET_TEAMS, GET_PROJECTS } from "../../helpers/url_helper";
import { del, get, post, put } from "../../helpers/api_helper";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';

import { Button, Form, Input, Select, Upload } from 'antd';

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

  const onFinish = (values) => {
    console.log(values);
  };
  //meta title
  document.title = "Create New Project | Skote - React Admin & Dashboard Template";

  return (
    <React.Fragment>
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
                <Form.Item name={['description']} label="Description">
                  <Input.TextArea />
                </Form.Item>
                <Form.Item label="Assign to Team" >
                  <Select
                    style={{
                      width: 120,
                    }}
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
                  >
                    {staffs.map(staff => {
                      <Option value="korea" label="Korea">
                        <div className="demo-option-label-item">
                          Korea (韩国)
                        </div>
                      </Option>
                    })}

                  </Select>
                </Form.Item>
                <Form.Item label="Documents">
                  <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                    <Upload.Dragger name="files" action="/upload.do">
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">Click or drag file to this area to upload</p>
                      <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                    </Upload.Dragger>
                  </Form.Item>
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
