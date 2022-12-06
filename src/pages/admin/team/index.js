import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { Link, withRouter } from "react-router-dom"
//redux
import { connect, useSelector, useDispatch } from "react-redux"
import classnames from "classnames"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { Button, Table, Tag, Space, Modal, Form, Input } from "antd"
import { MinusCircleOutlined, PlusOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { Container } from "reactstrap"
import { getTeams, updateTeams, deleteTeams, addTeams } from "store/actions"

import {
  Card,
  CardBody,
  Col,
  Row,
} from "reactstrap";

const { confirm } = Modal;

const TeamManager = props => {
  const { teams, onGetTeams, onUpdateTeam, onDeleteTeam, onAddTeam } = props

  useEffect(() => {
    onGetTeams()
  }, [onGetTeams])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editTeam, setEditTeam] = useState(null)
  const [isEdit, setIsEditTeam] = useState(true)
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue(editTeam)
  }, [form, editTeam])

  const onFinish = (value) => {
    value.tags = value.tags.join(";");
    if (isEdit)
      onUpdateTeam(value);
    else
      onAddTeam(value);
  }

  const showDeleteConfirm = (team) => {
    confirm({
      title: `Are you sure delete team '${team.name}'?`,
      icon: <ExclamationCircleFilled />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        onDeleteTeam(team);
      },
      onCancel() {
      },
    });
  };

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    form.submit();
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    // form.resetFields();
    form.setFieldsValue({
      id: undefined,
      name: undefined,
      description: undefined,
      tags:undefined
    });
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
  };
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
  };

  const columns = [
    {
      title: "Team",
      dataIndex: "name",
      key: "name",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map(tag => {
            let color = "blue"

            return (
              <Tag color={color} key={tag}>
                {tag.toLowerCase()}
              </Tag>
            )
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              setIsEditTeam(true);
              setEditTeam(record);
              showModal();
            }}
          >
            Edit{" "}
          </a>
          <a onClick={() => {
            showDeleteConfirm(record);
          }}
          >Delete</a>
        </Space>
      ),
    },
  ]

  //meta title
  document.title = "Team Manager | TCG - Admin & Dashboard"
  return (
    <>
      <Modal
        title={isEdit ? "Edit Team" : "Add new team"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}

      >
        <Form
          form={form}
          initialValues={isEdit ? editTeam : null}
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
          <Form.List name="tags" label="Tags">

            {(fields, { add, remove }, { errors }) => (
              <>
                Tags<br /><br />
                {fields.map((field, index) => (
                  <Form.Item
                    {...formItemLayout}
                    label={index === 0 ? '' : ''}
                    required={false}
                    key={field.key}
                  >
                    <Form.Item
                      {...field}
                      validateTrigger={['onChange', 'onBlur']}
                      noStyle
                    >
                      <Input
                        placeholder="tag name"
                        style={{
                          width: '20%',
                        }}
                      />
                    </Form.Item>
                    {" "}
                    {fields.length > 0 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => remove(field.name)}
                      />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{
                      width: '20%',
                    }}
                    icon={<PlusOutlined />}
                  >
                    Add tag
                  </Button>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form>
      </Modal>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Staff Manager" breadcrumbItem="Team" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <Button onClick={() => {
                    setIsEditTeam(false);
                    setEditTeam(null);
                    showModal();
                  }} type="primary">Add team</Button>
                  <Table columns={columns} dataSource={teams} bordered />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

TeamManager.propTypes = { devices: PropTypes.any }

const mapStateToProps = ({ Teams }) => ({
  teams: Teams.teams,
})

const mapDispatchToProps = dispatch => ({
  onGetTeams: () => dispatch(getTeams()),
  onUpdateTeam: (team) => dispatch(updateTeams(team)),
  onDeleteTeam: (team) => dispatch(deleteTeams(team)),
  onAddTeam: (team) => dispatch(addTeams(team))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TeamManager))
