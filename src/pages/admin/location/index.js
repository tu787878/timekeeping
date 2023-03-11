import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { Link, withRouter } from "react-router-dom"
//redux
import { connect, useSelector, useDispatch } from "react-redux"
import classnames from "classnames"

import { post, get, put, del } from "../../../helpers/api_helper"
import { GET_LOCATIONS } from "../../../helpers/url_helper"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { Button, Table, Tag, Space, Modal, Form, Input } from "antd"
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
          setLocation(res.data);
          console.log(locations);
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
    put(`${GET_LOCATIONS}/${location.id}`, location)
      .then(res => {
        if(res){
          setLocation(res.data);
          console.log(locations);
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
    post(`${GET_LOCATIONS}`, location)
      .then(res => {
        if(res){
          setLocation(res.data);
          console.log(locations);
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
          setLocation(res.data);
          console.log(locations);
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
      title: `Are you sure delete location '${location.name}'?`,
      icon: <ExclamationCircleFilled />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
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

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      sorter: (a, b) => a.description.localeCompare(b.description),
    },
    {
      title: "Action",
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
        title={isEdit ? "Edit Location" : "Add new location"}
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
          <Form.Item hidden={true} name="id" label="Id">
            <Input />
          </Form.Item>
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Location Manager" breadcrumbItem="Location" />
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
                    Add location
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
)(withRouter(LocationManager))
