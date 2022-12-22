import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { Link, withRouter } from "react-router-dom"
//redux
import { connect, useSelector, useDispatch } from "react-redux"
import classnames from "classnames"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { Button, Table, Space, Modal, Form, Input, Select, } from "antd"
import {
  MinusCircleOutlined,
  CalendarTwoTone,
  ExclamationCircleFilled,
  DeleteTwoTone,
  EditTwoTone,
  ProfileTwoTone,
} from "@ant-design/icons"
import { Container } from "reactstrap"
import { getTeams, getStaffs, updateStaffs, deleteStaffs, addTeams } from "store/actions"

import { Card, CardBody, Col, Row } from "reactstrap"

const { confirm } = Modal

const StaffManager = props => {
  const { staffs, teams, onGetStaffs, onGetTeams, onUpdateStaff, onDeleteStaff, onAddTeam } = props

  useEffect(() => {
    onGetStaffs()
  }, [onGetStaffs])

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

  const onFinish = value => {
    let data = {
      firstName: value.userDetail.firstName,
      lastName: value.userDetail.lastName,
      // phone: phone,
      email: value.userDetail.email,
      role: value.type,
      capabilities: value.accountRole.capabilities,
      jobName: value.job.name,
      team: value.job.team.id,
      minHours: value.job.minHours,
      maxHours: value.job.maxHours,
      workingType: value.job.workingTimeType,
      // workFrom: workFrom,
      // workTo: workTo,
      id: value.id
    }
    onUpdateStaff(data);
  }

  const showDeleteConfirm = staff => {
    confirm({
      title: `Are you sure delete staff '${staff.userDetail.firstName}'?`,
      icon: <ExclamationCircleFilled />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        onDeleteStaff(staff.id)
      },
      onCancel() { },
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
    // form.setFieldsValue({
    //   id: undefined,
    //   team: undefined,
    //   userDetail: undefined,
    //   username: undefined,
    //   job: undefined,
    //   accountRole: undefined
    // })
    setIsModalOpen(false)
  }

  const columns = [
    {
      title: "Team",
      dataIndex: ["job", "team", "name"],
      key: "teamName",
      sorter: (a, b) => a.teamName?.localeCompare(b.teamName),
    },
    {
      title: "First Name",
      dataIndex: ["userDetail", "firstName"],
      key: "firstName",

      sorter: (a, b) => a.firstName?.localeCompare(b.firstName),
    },
    {
      title: "Last Name",
      dataIndex: ["userDetail", "lastName"],
      key: "lastName",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.name?.localeCompare(b.name),
    },
    {
      title: "Job",
      dataIndex: ["job", "name"],
      key: "jobName",
      sorter: (a, b) => a.name?.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: ["userDetail", "email"],
      key: "username",
      sorter: (a, b) => a.name?.localeCompare(b.name),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              setIsEditTeam(true)
              setEditTeam(record)
              form.setFieldsValue(record)
              showModal()
            }}
          >
            <EditTwoTone twoToneColor="green" />
          </a>
          <a href={`contacts-profile/${record.id}`}>
            <ProfileTwoTone />
          </a>
          <a
            href={`calendar/${record.id}`}
          >
            <CalendarTwoTone />
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
  document.title = "Staff Manager | TCG - Admin & Dashboard"
  return (
    <>
      <Modal
        title={"Edit staff"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          name="control-hooks"
          onFinish={onFinish}
        >
          <Form.Item name={["job", "team", "id"]} label="Team">
            <Select allowClear>

              {teams.map(team => {
                return (
                  <Select.Option key={team.id} value={team.id}>{team.name}</Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item hidden={true} name="id" label="Id">
            <Input />
          </Form.Item>
          <Form.Item name={["userDetail", "firstName"]} label="First Name">
            <Input />
          </Form.Item>
          <Form.Item name={["userDetail", "lastName"]} label="Last Name">
            <Input />
          </Form.Item>
          <Form.Item name={["userDetail", "email"]} label="Email">
            <Input />
          </Form.Item>
          <Form.Item name={["type"]} label="Role">
            <Select>
              <Select.Option value="ADMIN">Admin</Select.Option>
              <Select.Option value="EMPLOYEE">Employee</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name={["job", "name"]} label="Job name">
            <Input />
          </Form.Item>
          <Form.Item name={["job", "workingTimeType"]} label="WorkingType">
            <Select>
              <Select.Option value="FULLTIME">Fulltime</Select.Option>
              <Select.Option value="PARTTIME">Parttime</Select.Option>
              <Select.Option value="MINIJOB">Minijob</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item noStyle shouldUpdate={(prev, cur) => prev?.job?.workingTimeType !== cur?.job?.workingTimeType}>
            {({ getFieldValue }) => getFieldValue(["job", "workingTimeType"]) !== "FULLTIME" && (
              <>
                <Form.Item name={["job", "minHours"]} label="Min Hours (in month)">
                  <Input />
                </Form.Item>

              </>
            )}
          </Form.Item>
          <Form.Item name={["job", "maxHours"]} label="Vacation days (in year)">
              <Input />
            </Form.Item>
          <Form.Item name={["accountRole", "capabilities"]} label="Manage Calendar">
            <Select
              mode="multiple"
              allowClear
              value={() => {
                getFieldValue(["accountRole", "capabilities"]).map(e => { e.capabilityId })
              }}
            >
              {teams.map(team => {
                return (
                  <Select.Option key={team.id} value={"Calendar.Team." + team.id}>{team.name}</Select.Option>
                );
              })}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Staff Manager" breadcrumbItem="Team" />
            <Col lg="12" style={{ overflowX: 'scroll' }}>
                  <a href={`/new-staff`}>
                    <Button type="primary">Add Staff</Button>
                  </a>

                  <Table columns={columns} dataSource={staffs} bordered />
            </Col>
        </Container>
      </div>
    </>
  )
}

StaffManager.propTypes = { devices: PropTypes.any }

const mapStateToProps = ({ Staffs, Teams }) => ({
  staffs: Staffs.staffs,
  teams: Teams.teams
})

const mapDispatchToProps = dispatch => ({
  onGetStaffs: () => dispatch(getStaffs()),
  onGetTeams: () => dispatch(getTeams()),
  onUpdateStaff: staff => dispatch(updateStaffs(staff)),
  onDeleteStaff: staff => dispatch(deleteStaffs(staff)),
  onAddTeam: team => dispatch(addTeams(team)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StaffManager))
