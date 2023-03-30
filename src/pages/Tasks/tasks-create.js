import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { withTranslation } from "react-i18next";

import "react-datepicker/dist/react-datepicker.css";
import { GET_STAFFS, GET_PROJECTS, UPLOAD_FILE_MULTI, GET_TASKS } from "../../helpers/url_helper";
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

const TasksCreate = (props) => {

  const [projects, setProjects] = useState([])
  const [staffs, setStaffs] = useState([])

  const [fileList, setFileList] = useState([]);
  const [severity, setSeverity] = useState("LOW");
  const [type, setType] = useState("FEATURES");
  const [uploading, setUploading] = useState(false);

  const [project, setProject] = useState(null)
  const [accounts, setAccounts] = useState(null)

  const props2 = {
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

  const onGetProjects = () => {
    get(GET_PROJECTS + "/all").then(data => {
      setProjects(data.data);
    })
  }

  const onGetStaffs = () => {
    get(GET_STAFFS).then(data => {
      setStaffs(data.data);
    })
  }
  useEffect(() => {
    onGetProjects()
    onGetStaffs()
  }, [])

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.success(props.t("Add a task success!"));
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
            type: type,
            severity: severity,
            project: project ? { id: project } : null,
            accounts: accounts ? accounts.map(acc => { return { id: acc } }) : null
          }
          post(GET_TASKS, data)
            .then((res) => {
              console.log(res);
              success()
            });
          console.log(data);
        })
        .catch(() => {
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
        project: project ? { id: project } : null,
        accounts: accounts ? accounts.map(acc => { return { id: acc } }) : null,
        severity: severity,
        type: type
      }
      post(GET_TASKS, data)
        .then((res) => {
          console.log(res);
          success()
        });
      console.log(data);
    }

    console.log(values);
  };
  //meta title
  document.title = "Create New Task | Skote - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      {contextHolder}
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title={props.t("Tasks")} breadcrumbItem={props.t("Create New")} />
          <Row>
            <Col lg="12">
              <Form labelCol={{ span: 3 }} name="nest-messages" onFinish={onFinish}>
                <Form.Item
                  name={['name']}
                  label={props.t("Name")}
                >
                  <Input />
                </Form.Item>

                <Form.Item label={props.t("Type")} >
                  <Select
                    style={{
                      width: 120,
                    }}
                    onChange={(type) => { setType(type) }}
                    defaultValue={"FEATURES"}
                  >
                    <Option key="BUGS">{props.t("Bugs")}</Option>
                    <Option key="FEATURES">{props.t("Features")}</Option>
                    <Option key="TODO">{props.t("Todo")}</Option>
                    <Option key="OTHERS">{props.t("Others")}</Option>
                  </Select>
                </Form.Item>
                <Form.Item label={props.t("Severity")} >
                  <Select
                    style={{
                      width: 120,
                    }}
                    onChange={(severity) => { setSeverity(severity) }}
                    defaultValue={"LOW"}
                  >
                    <Option key="LOW">{props.t("Low")}</Option>
                    <Option key="MEDIUM">{props.t("Medium")}</Option>
                    <Option key="HIGH">{props.t("High")}</Option>
                  </Select>
                </Form.Item>
                <Form.Item label={props.t("Assign to Project")} >
                  <Select
                    style={{
                      width: 120,
                    }}
                    allowClear
                    onChange={(team) => { setProject(team) }}
                  >
                    {projects.map(option => (
                      <Option key={option.id}>{option.name}</Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item label={props.t("Assign to Users")}>
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
                        <Option key={staff.id} value={staff.id} label={staff.id}>
                          <div className="demo-option-label-item">
                            {staff.userDetail.firstName} {staff.userDetail.lastName} ({staff.username})
                          </div>
                        </Option>
                      )
                    })}

                  </Select>
                </Form.Item>
                <Form.Item name={['description']} label={props.t("Description")}>
                  <Input.TextArea rows={6}/>
                </Form.Item>
                <Form.Item label="Documents">
                  <Upload {...props2} multiple>
                    <Button icon={<UploadOutlined />}>label={props.t("Select File")}</Button>
                  </Upload>
                </Form.Item>
                <Form.Item
                >
                  <Button type="primary" htmlType="submit">
                  {props.t("Submit")}
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

export default withTranslation()(TasksCreate);
