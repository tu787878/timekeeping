import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { Link, withRouter } from "react-router-dom"
//redux
import { connect, useSelector, useDispatch } from "react-redux"
import classnames from "classnames"
import { withTranslation } from "react-i18next";

import { get, del } from "../../../helpers/api_helper"
import { GET_LOCATIONS, GET_STAFFS } from "../../../helpers/url_helper"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import {
  Button,
  Table,
  Space,
  Modal,
  Form,
  Input,
  Select,
  Typography,
  TimePicker,
  InputNumber,
  Col,
  Row,
} from "antd"
import {
  MinusCircleOutlined,
  CalendarTwoTone,
  ExclamationCircleFilled,
  DeleteTwoTone,
  EditTwoTone,
  ProfileTwoTone,
  PlusOutlined,
} from "@ant-design/icons"
import { Container } from "reactstrap"
import {
  getTeams,
  getStaffs,
  updateStaffs,
  deleteStaffs,
  addTeams,
} from "store/actions"
const { Option } = Select
import { Card, CardBody } from "reactstrap"

const { confirm } = Modal

const StaffManager = props => {
  const {
    staffs,
    teams,
    onGetStaffs,
    onGetTeams,
    onUpdateStaff,
    onDeleteStaff,
    onAddTeam,
  } = props

  useEffect(() => {
    onGetStaffs()
  }, [onGetStaffs])

  useEffect(() => {
    onGetTeams()
  }, [onGetTeams])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editTeam, setEditTeam] = useState(null)
  const [isEdit, setIsEditTeam] = useState(true)
  const [locations, setLocations] = useState([])
  const [form] = Form.useForm()

  const [workingTimeShouldRemove, setWorkingTimeShouldRemove] = useState([])

  useEffect(() => {
    form.setFieldsValue(editTeam)
  }, [form, editTeam])

  useEffect(() => {
    getLocations()
  }, [])

  const getLocations = () => {
    get(`${GET_LOCATIONS}`)
      .then(res => {
        console.log(res)
        if (res) {
          setLocations(res.data)
          console.log(res.data)
        } else {
          setLocation([])
        }
      })
      .catch(error => {
        setLocation([])
      })
  }

  const addToRemove = wt => {
    setWorkingTimeShouldRemove(workingTimeShouldRemove => [
      ...workingTimeShouldRemove,
      wt,
    ])
  }

  const onFinish = value => {
    const formatTimeLogs = value.workingTimes.map(wt => {
      return {
        breakTime: wt.breakTime,
        dayOfWeek: wt.dayOfWeek,
        timeFrom: wt.timeFrom.format("HH:mm"),
        timeTo: wt.timeTo.format("HH:mm"),
        id: wt.id,
      }
    })
    value.workingTimes = formatTimeLogs

    // remove workingtime
    workingTimeShouldRemove.forEach(wt => {
      del(`${GET_STAFFS}/workingTime/${wt.id}`)
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    })
    console.log(value)
    let data = {
      firstName: value.userDetail.firstName,
      lastName: value.userDetail.lastName,
      // phone: phone,
      email: value.userDetail.email,
      role: value.type,
      // capabilities: value.accountRole.capabilities,
      jobName: value.job.name,
      team: value.job.team.id,
      location: value.location.id,
      minHours: value.job.minHours,
      maxHours: value.job.maxHours,
      workingType: value.job.workingTimeType,
      minOvertime: value.job.minOvertime,
      // workFrom: workFrom,
      // workTo: workTo,
      id: value.id,
      workingTimes: value.workingTimes,
    }
    setWorkingTimeShouldRemove([])
    onUpdateStaff(data)
  }

  const showDeleteConfirm = staff => {
    confirm({
      title: `${props.t("Are you sure delete staff")} '${staff.userDetail.firstName}'?`,
      icon: <ExclamationCircleFilled />,
      okText: props.t("Yes"),
      okType: "danger",
      cancelText: props.t("No"),
      onOk() {
        onDeleteStaff(staff.id)
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
      title: props.t("Location"),
      dataIndex: ["location", "name"],
      key: "locationName",
      sorter: (a, b) => a.locationName?.localeCompare(b.locationName),
    },
    {
      title: props.t("Team"),
      dataIndex: ["job", "team", "name"],
      key: "teamName",
      sorter: (a, b) => a.teamName?.localeCompare(b.teamName),
    },
    {
      title: props.t("First Name"),
      dataIndex: ["userDetail", "firstName"],
      key: "firstName",

      sorter: (a, b) => a.firstName?.localeCompare(b.firstName),
    },
    {
      title: props.t("Last Name"),
      dataIndex: ["userDetail", "lastName"],
      key: "lastName",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.name?.localeCompare(b.name),
    },
    {
      title: props.t("Job"),
      dataIndex: ["job", "name"],
      key: "jobName",
      sorter: (a, b) => a.name?.localeCompare(b.name),
    },
    {
      title: props.t("Email"),
      dataIndex: ["userDetail", "email"],
      key: "username",
      sorter: (a, b) => a.name?.localeCompare(b.name),
    },
    {
      title: props.t("Action"),
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
          <a href={`calendar/${record.id}`}>
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
        title={props.t("Edit staff")}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
      >
        <Form
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          labelAlign="left"
        >
          <Form.Item name={["location", "id"]} label={props.t("Location")}>
            <Select allowClear>
              {locations.map(location => {
                return (
                  <Select.Option key={location.id} value={location.id}>
                    {location.name}
                  </Select.Option>
                )
              })}
            </Select>
          </Form.Item>
          <Form.Item name={["job", "team", "id"]} label={props.t("Team")}>
            <Select allowClear>
              {teams.map(team => {
                return (
                  <Select.Option key={team.id} value={team.id}>
                    {team.name}
                  </Select.Option>
                )
              })}
            </Select>
          </Form.Item>
          <Form.Item hidden={true} name="id" label={props.t("Id")}>
            <Input />
          </Form.Item>
          <Form.Item name={["userDetail", "firstName"]} label={props.t("First name")}>
            <Input />
          </Form.Item>
          <Form.Item name={["userDetail", "lastName"]} label={props.t("Last name")}>
            <Input />
          </Form.Item>
          <Form.Item name={["userDetail", "email"]} label={props.t("Email")}>
            <Input />
          </Form.Item>
          <Form.Item name={["type"]} label={props.t("Role")}>
            <Select>
              <Select.Option value="ADMIN">{props.t("Admin")}</Select.Option>
              <Select.Option value="EMPLOYEE">{props.t("Employee")}</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name={["job", "name"]} label={props.t("Job name")}>
            <Input />
          </Form.Item>
          <Form.Item name={["job", "workingTimeType"]} label={props.t("WorkingType")}>
            <Select>
              <Select.Option value="FULLTIME">{props.t("Fulltime")}</Select.Option>
              <Select.Option value="PARTTIME">{props.t("Parttime")}</Select.Option>
              <Select.Option value="MINIJOB">{props.t("Minijob")}</Select.Option>
            </Select>
          </Form.Item>
          {/* <Form.Item
            noStyle
            shouldUpdate={(prev, cur) =>
              prev?.job?.workingTimeType !== cur?.job?.workingTimeType
            }
          >
            {({ getFieldValue }) =>
              getFieldValue(["job", "workingTimeType"]) !== "FULLTIME" && (
                <>
                  <Form.Item
                    name={["job", "minHours"]}
                    label="Min Hours (in month)"
                  >
                    <Input />
                  </Form.Item>
                </>
              )
            }
          </Form.Item> */}
          <Form.List name={["workingTimes"]}>
            {(fields, { add, remove }) => (
              <>
                {!!fields.length && (
                  <Row align="middle">
                    <Col span={6} style={{ textAlign: "center" }}>
                      <Typography.Text>{props.t("Day Of Week")}</Typography.Text>
                    </Col>
                    <Col span={6} style={{ textAlign: "center" }}>
                      <Typography.Text>{props.t("From")}</Typography.Text>
                    </Col>
                    <Col span={6} style={{ textAlign: "center" }}>
                      <Typography.Text>{props.t("To")}</Typography.Text>
                    </Col>
                    <Col span={5} style={{ textAlign: "center" }}>
                      <Typography.Text>{props.t("Breaktime")} ({props.t("mins")})</Typography.Text>
                    </Col>
                  </Row>
                )}
                {fields.map(({ key, name, ...field }) => (
                  <Row key={key}>
                    <Space
                      style={{
                        display: "flex",
                        marginBottom: 8,
                      }}
                      align="baseline"
                    >
                      <Col span={6}>
                        <Form.Item hidden={true} {...field} name={[name, "id"]}>
                          <Input />
                        </Form.Item>
                        <Form.Item {...field} name={[name, "dayOfWeek"]}>
                          <Select
                            placeholder="Select"
                            style={{
                              width: 140,
                            }}
                          >
                            <Option value={1} label="Monday">
                            {props.t("Monday")}
                            </Option>
                            <Option value={2} label="Tuesday">
                            {props.t("Tuesday")}
                            </Option>
                            <Option value={3} label="Wednesday">
                               {props.t("Wednesday")}
                            </Option>
                            <Option value={4} label="Thursday">
                               {props.t("Thursday")}
                            </Option>
                            <Option value={5} label="Friday">
                               {props.t("Friday")}
                            </Option>
                            <Option value={6} label="Saturday">
                               {props.t("Saturday")}
                            </Option>
                            <Option value={7} label="Sunday">
                               {props.t("Sunday")}
                            </Option>
                            {/* <Option key="OTHERS" value="OTHERS">
                              OTHERS
                            </Option> */}
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={6}>
                        <Form.Item {...field} name={[name, "timeFrom"]}>
                          <TimePicker
                            format="HH:mm"
                            style={{
                              width: 140,
                            }}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={6}>
                        <Form.Item {...field} name={[name, "timeTo"]}>
                          <TimePicker
                            format="HH:mm"
                            style={{
                              width: 140,
                            }}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={5}>
                        <Form.Item {...field} name={[name, "breakTime"]}>
                          <InputNumber
                            min={0}
                            style={{
                              width: 140,
                            }}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={1}>
                        <Form.Item {...field}>
                          <MinusCircleOutlined
                            onClick={() => {
                              addToRemove(
                                form.getFieldsValue().workingTimes[name]
                              )
                              remove(name)
                            }}
                          />
                        </Form.Item>
                      </Col>
                    </Space>
                  </Row>
                ))}
                <Form.Item wrapperCol={24}>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    {props.t("Add Workingtime")}
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item name={["job", "maxHours"]} label={props.t("Vacation days (in year)")}>
            <Input />
          </Form.Item>
          <Form.Item name={["job", "minOvertime"]} label={props.t("Min Overtime (in minutes)")}>
            <Input />
          </Form.Item>
          {/* <Form.Item
            name={["accountRole", "capabilities"]}
            label="Manage Calendar"
          >
            <Select
              mode="multiple"
              allowClear
              value={() => {
                getFieldValue(["accountRole", "capabilities"]).map(e => {
                  e.capabilityId
                })
              }}
            >
              {teams.map(team => {
                return (
                  <Select.Option
                    key={team.id}
                    value={"Calendar.Team." + team.id}
                  >
                    {team.name}
                  </Select.Option>
                )
              })}
            </Select>
          </Form.Item> */}
        </Form>
      </Modal>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title={props.t("Staff Manager" )} breadcrumbItem={props.t("Staff")} />
          <Col lg="12" style={{ overflowX: "scroll" }}>
            <Link to={`/new-staff`}>
              <Button type="primary" style={{ marginBottom: 20 }}>
              {props.t("Add Staff")}
              </Button>
            </Link>

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
  teams: Teams.teams,
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
)(withRouter(withTranslation()(StaffManager)))
