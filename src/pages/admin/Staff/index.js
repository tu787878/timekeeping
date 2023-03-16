import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { Link, withRouter } from "react-router-dom"
//redux
import { connect, useSelector, useDispatch } from "react-redux"
import classnames from "classnames"

import { get, del } from "../../../helpers/api_helper"
import { GET_LOCATIONS, GET_STAFFS } from "../../../helpers/url_helper"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { Button, Table, Space, Modal, Form, Input, Select, Typography, TimePicker, InputNumber } from "antd"
import {
  MinusCircleOutlined,
  CalendarTwoTone,
  ExclamationCircleFilled,
  DeleteTwoTone,
  EditTwoTone,
  ProfileTwoTone,
  PlusOutlined
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
import { Card, CardBody, Col, Row } from "reactstrap"

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

  const [workingTimeShouldRemove, setWorkingTimeShouldRemove] = useState([]);

  useEffect(() => {
    form.setFieldsValue(editTeam)
  }, [form, editTeam])

  useEffect(() => {
    getLocations()
  }, [])

  const getLocations = () => {
    get(`${GET_LOCATIONS}`)
      .then(res => {
        console.log(res);
        if (res) {
          setLocations(res.data);
          console.log(res.data);
        }
        else {
          setLocation([]);
        }
      })
      .catch(error => {
        setLocation([]);
      })
  }

  const addToRemove = (wt) => {
    setWorkingTimeShouldRemove(workingTimeShouldRemove => [...workingTimeShouldRemove, wt])
  }

  const onFinish = value => {
    const formatTimeLogs = value.workingTimes.map(wt => {
      return {
        breakTime: wt.breakTime,
        dayOfWeek: wt.dayOfWeek,
        timeFrom: wt.timeFrom.format("HH:mm"),
        timeTo: wt.timeTo.format("HH:mm"),
        id: wt.id
      }
    })
    value.workingTimes = formatTimeLogs

    // remove workingtime
    workingTimeShouldRemove.forEach(wt => {
      del(`${GET_STAFFS}/workingTime/${wt.id}`)
        .then(res => {
          console.log(res);

        })
        .catch(error => {
          console.log(error);
        })
    })
    console.log(value);
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
      // workFrom: workFrom,
      // workTo: workTo,
      id: value.id,
      workingTimes: value.workingTimes
    }
    setWorkingTimeShouldRemove([])
    onUpdateStaff(data)


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
      title: "Location",
      dataIndex: ["location", "name"],
      key: "locationName",
      sorter: (a, b) => a.locationName?.localeCompare(b.locationName),
    },
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
        title={"Edit staff"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name={["location", "id"]} label="Location">
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
          <Form.Item name={["job", "team", "id"]} label="Team">
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
          <Form.List name={["workingTimes"]} >
            {(fields, { add, remove }) => (
              <>
                {!!fields.length && (
                  <Row align='middle'>
                    <Col span={5} style={{ textAlign: 'center' }}>
                      <Typography.Text>Day Of Week</Typography.Text>
                    </Col>
                    <Col span={5} style={{ textAlign: 'center' }}>
                      <Typography.Text>From</Typography.Text>
                    </Col>
                    <Col span={5} style={{ textAlign: 'center' }}>
                      <Typography.Text>To</Typography.Text>
                    </Col>
                    <Col span={2} style={{ textAlign: 'center' }} >
                      <Typography.Text>Breaktime (mins)</Typography.Text>
                    </Col>
                  </Row>
                )}
                {fields.map(({ key, name, ...field }) => (
                  <Row key={key}>
                    <Space
                      style={{
                        display: 'flex',
                        marginBottom: 8,
                      }}
                      align="baseline"
                    >
                      <Col span={5}>
                        <Form.Item hidden={true} {...field} name={[name, 'id']}>
                          <Input />
                        </Form.Item>
                        <Form.Item {...field} name={[name, 'dayOfWeek']}>
                          <Select placeholder="Select" style={{
                            width: 120,
                          }}
                          >
                            <Option value={1} label="Monday">
                              Monday
                            </Option>
                            <Option value={2} label="Tuesday">
                              Tuesday
                            </Option>
                            <Option value={3} label="Wednesday">
                              Wednesday
                            </Option>
                            <Option value={4} label="Thursday">
                              Thursday
                            </Option>
                            <Option value={5} label="Friday">
                              Friday
                            </Option>
                            <Option value={6} label="Saturday">
                              Saturday
                            </Option>
                            <Option value={7} label="Sunday">
                              Sunday
                            </Option>
                            {/* <Option key="OTHERS" value="OTHERS">
                              OTHERS
                            </Option> */}
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={5}>
                        <Form.Item {...field} name={[name, 'timeFrom']} >
                          <TimePicker format="HH:mm" />
                        </Form.Item>
                      </Col>
                      <Col span={5}>
                        <Form.Item {...field} name={[name, 'timeTo']}>
                          <TimePicker format="HH:mm" />
                        </Form.Item>
                      </Col>
                      <Col span={2}>
                        <Form.Item {...field} name={[name, 'breakTime']}>
                          <InputNumber min={0} />
                        </Form.Item>
                      </Col>
                      <Col span={2}>
                        <Form.Item {...field} >
                          <MinusCircleOutlined onClick={() => {
                            addToRemove(form.getFieldsValue().workingTimes[name])
                            remove(name)
                          }
                          } />
                        </Form.Item>
                      </Col>

                    </Space>
                  </Row>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    Add Workingtime
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item name={["job", "maxHours"]} label="Vacation days (in year)">
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
          <Breadcrumbs title="Staff Manager" breadcrumbItem="Staff" />
          <Col lg="12" style={{ overflowX: "scroll" }}>
            <Link to={`/new-staff`}>
              <Button type="primary" style={{ marginBottom: 20 }}>
                Add Staff
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
)(withRouter(StaffManager))
