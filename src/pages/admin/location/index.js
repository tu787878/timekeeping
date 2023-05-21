import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { withTranslation } from "react-i18next";
import { Link, withRouter } from "react-router-dom"
//redux
import { connect, useSelector, useDispatch } from "react-redux"
import classnames from "classnames"

import { post, get, put, del } from "../../../helpers/api_helper"
import { GET_LOCATIONS } from "../../../helpers/url_helper"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { Button, Table, Tag, Space, Modal, Form, Input, Select } from "antd"
import {
  MinusCircleOutlined,
  PlusOutlined,
  ExclamationCircleFilled,
  DeleteTwoTone,
  EditTwoTone,
} from "@ant-design/icons"
import { Container } from "reactstrap"

import { Card, CardBody, Col, Row } from "reactstrap"

const { confirm } = Modal

const LocationManager = props => {

  const [locations, setLocation] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editLocation, setEditLocation] = useState(null)
  const [isEdit, setIsEditLocaton] = useState(true)
  const [form] = Form.useForm()

  useEffect(() => {
    getLocations();
  }, [])

  useEffect(() => {
    form.setFieldsValue(editLocation)
  }, [form, editLocation])

  const getLocations = () => {
    get(`${GET_LOCATIONS}`)
      .then(res => {
        if(res){
          res.data.forEach(element => {
            if(element.timeZone != null && element.timeZone != "")
            {
              element.timeZone = element.timeZone.replace("/", "")
            }
          });
          console.log(res.data);
          setLocation(res.data);
        }
        else{
          setLocation([]);
        }
      })
      .catch(error => {
        setLocation([]);
      })
  }

  const updateLocation = location => {
    if(location.timeZone != "" && location.timeZone != null){
      location.timeZone = timeZoneIds.find(x => x.value === location.timeZone).label;
    }
    console.log(location);
    put(`${GET_LOCATIONS}/${location.id}`, location)
      .then(res => {
        if(res){
          res.data.forEach(element => {
            if(element.timeZone != null && element.timeZone != "")
            {
              element.timeZone = element.timeZone.replace("/", "")
            }
          });
          setLocation(res.data);
        }
        else{
          setLocation([]);
        }
      })
      .catch(error => {
        setLocation([]);
      })
  }

  const addLocation = location => {
    if(location.timeZone != "" && location.timeZone != null){
      location.timeZone = timeZoneIds.find(x => x.value === location.timeZone).label;
    }
    console.log(location);
    post(`${GET_LOCATIONS}`, location)
      .then(res => {
        if(res){
          res.data.forEach(element => {
            if(element.timeZone != null && element.timeZone != "")
            {
              element.timeZone = element.timeZone.replace("/", "")
            }
          });
          setLocation(res.data);
        }
        else{
          setLocation([]);
        }
      })
      .catch(error => {
        setLocation([]);
      })
  }

  const deleteLocation = location => {
    del(`${GET_LOCATIONS}/${location.id}`)
      .then(res => {
        if(res){
          res.data.forEach(element => {
            if(element.timeZone != null && element.timeZone != "")
            {
              element.timeZone = element.timeZone.replace("/", "")
            }
          });
          setLocation(res.data);
        }
        else{
          setLocation([]);
        }
      })
      .catch(error => {
        setLocation([]);
      })
  }

  const onFinish = value => {
    
    if (isEdit) updateLocation(value)
    else addLocation(value)

  }

  const showDeleteConfirm = location => {
    confirm({
      title: `${props.t("Are you sure delete location")} '${location.name}'?`,
      icon: <ExclamationCircleFilled />,
      okText: props.t("Yes"),
      okType: "danger",
      cancelText: props.t("No"),
      onOk() {
        deleteLocation(location)
      },
      onCancel() {},
    })
  }

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    form.submit()
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    // form.resetFields();

    setIsModalOpen(false)
  }

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 4,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 20,
      },
    },
  }
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 20,
        offset: 4,
      },
    },
  }

  const timeZoneIds = Intl.supportedValuesOf('timeZone').map(e => ({value: e.replace("/", ""), label: e }))
  const columns = [
    {
      title: props.t("Name"),
      dataIndex: "name",
      key: "name",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: props.t("Description"),
      dataIndex: "description",
      key: "description",
      sorter: (a, b) => a.description.localeCompare(b.description),
    },
    {
      title: props.t("Timezone"),
      dataIndex: "timeZone",
      key: "timeZone",
      render: (record, _) => {
        return (record != "" && record != null) ?
          <div>{timeZoneIds.find(x => x.value === record) ? timeZoneIds.find(x => x.value === record).label : ""}</div> : ""
      }
    },
    {
      title: props.t("Action"),
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              setIsEditLocaton(true)
              setEditLocation(record)
              form.setFieldsValue(record)
              showModal()
            }}
          >
            <EditTwoTone twoToneColor="green" />
          </a>
          <a
            onClick={() => {
              showDeleteConfirm(record)
            }}
          >
            <DeleteTwoTone twoToneColor="red" />
          </a>
        </Space>
      ),
    },
  ]

  //meta title
  document.title = "Location Manager | TCG - Admin & Dashboard"
  return (
    <>
      <Modal
        title={isEdit ? props.t("Edit Location") : props.t("Add new location")}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          initialValues={isEdit ? editLocation : null}
          name="control-hooks"
          onFinish={onFinish}
        >
          <Form.Item hidden={true} name="id" label={props.t("Id")}>
            <Input />
          </Form.Item>
          <Form.Item name="name" label={props.t("Name")}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label={props.t("Description")}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="timeZone" label={props.t("TimeZone")}>
            <Select
              options={timeZoneIds}
              showSearch
              filterOption={(input, option) => (option?.label ?? '').includes(input)}  
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              />
          </Form.Item>
        </Form>
      </Modal>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title={props.t("Location Manager")} breadcrumbItem={props.t("Location")} />
            <Col lg="12" style={{ overflowX: 'scroll' }}>
                  <Button
                    onClick={() => {
                      setIsEditLocaton(false)
                      setEditLocation(null)
                      form.setFieldsValue({
                        id: undefined,
                        name: undefined,
                        description: undefined,
                      })
                      showModal()
                    }}
                    type="primary"
                  >
                    {props.t("Add location")}
                  </Button>
                  <Table columns={columns} dataSource={locations} bordered />
            </Col>
        </Container>
      </div>
    </>
  )
}

LocationManager.propTypes = { devices: PropTypes.any }

export default connect(
)(withRouter(withTranslation()(LocationManager)))
