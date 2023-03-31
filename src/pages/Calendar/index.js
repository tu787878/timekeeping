import React from "react"
import PropTypes from "prop-types"
import "flatpickr/dist/themes/material_blue.css"
import Flatpickr from "react-flatpickr"
import { useState, useEffect } from "react"
import { get } from "../../helpers/api_helper"
import * as url from "../../helpers/url_helper"
import dayjs from "dayjs"

import { withTranslation } from "react-i18next";
import {
  Card,
  CardBody,
  Col,
  Container,
  Label,
  Row,
  FormGroup,
  InputGroup,
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import profile1 from "assets/images/profile-img.png"
import TimeLogsTable from "./TimeLogsTable"
import { useParams } from "react-router-dom"
import { Avatar, DatePicker, Collapse, Table } from "antd"
import LeaveDayModal from "./leave-day-modal"
const { Panel } = Collapse

const dayOfWeeks =  ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]  

const toTime = (minutes) => {
  let negative = false;
  if (minutes < 0) negative = true;

  minutes = Math.abs(minutes);
  var m = minutes % 60;
  var h = (minutes - m) / 60;
  return (negative ? "-" : "") + h + ":" + ((m < 10) ? "0" : "") + m;
}

const columns = tr => [
  {
    title: tr("Day"),
    dataIndex: "dayOfWeek",
    key: "dayOfWeek",
    render: value => dayOfWeeks[value]
  },
  {
    title: tr("From"),
    dataIndex: "timeFrom",
    key: "timeFrom",
  },
  {
    title: tr("To"),
    dataIndex: "timeTo",
    key: "timeTo",
  },
  {
    title: tr("Breaktime"),
    dataIndex: "breakTime",
    key: "breakTime",
  },
  {
    title: tr("Total time"),
    dataIndex: "total",
    key: "total",
    render: value => toTime(value)
  }
]


const Calender = (props) => {
  //meta title
  document.title = "Full Calendar | Skote - React Admin & Dashboard Template"
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [vacation, setVacation] = useState(0)
  const [month, setmonth] = useState(dayjs(new Date()))
  const obj = JSON.parse(localStorage.getItem("authUser"))

  const onGetVacation = id => {
    get(
      url.BASE +
        "/account/" +
        id +
        "/total-vacation?month=" +
        month.format("DD/MM/YYYY")
    )
      .then(data => {
        console.log(data)
        setVacation(data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    if (id === undefined) {
      get(url.GET_STAFFS + "/" + obj.account.id).then(data => {
        setUser(data.data)
      })
    } else {
      get(url.GET_STAFFS + "/" + id).then(data => {
        setUser(data.data)
      })
    }
  }, [])

  useEffect(() => {
    if (id === undefined) {
      onGetVacation(obj.account.id)
    } else {
      onGetVacation(id)
    }
  }, [month])

  const onChange = values => {
    console.log(values)
    setmonth(values)
    // dispatch(onGetEvents({id:obj.account.id, month:month.format('DD/MM/YYYY')}))
  }

  console.log(props.t);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title={props.t("Calendar")} breadcrumbItem={props.t("Calendar Manager")} />
          <Row>
            <Col>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col xs="7">
                      <div className="text-primary p-3">
                        {/* <h5 className="text-primary">Welcome Back !</h5>
                        <p>It will seem like simplified</p> */}
                      </div>
                    </Col>
                    <Col xs="5" className="align-self-end">
                      <img src={profile1} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <Row className="align-items-center">
                    <Col sm="6">
                      <div className="avatar-md profile-user-wid mb-4">
                        {user?.userDetail.avatar !== "" ? (
                          <Avatar src={user?.userDetail.avatar} />
                        ) : (
                          <div className="avatar-md">
                            <span className="avatar-title rounded-circle bg-info text-white font-size-24">
                              {user?.userDetail.lastName.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                      <h5 className="font-size-15 text-truncate">
                        {user?.userDetail?.firstName}{" "}
                        {user?.userDetail?.lastName}
                      </h5>

                      <Collapse size="small" bordered={false}>
                        <Panel header="Informations" key="1">
                          <p className="mb-0 text-truncate">
                          {props.t("Job")}: {user?.job?.name}
                          </p>
                          <p className="mb-0 text-truncate">
                          {props.t("Type")}: {user?.job?.workingTimeType}
                          </p>
                          <p className="mb-0 text-truncate">
                          {props.t("Vacation")}: {vacation / 60 / 8}/{user?.job?.maxHours}{" "}
                          {props.t("days")} ({vacation / 60}{props.t("h")}/{user?.job?.maxHours * 8}
                          {props.t("h")})
                          </p>
                          <p className="mb-0 text-truncate">
                          {props.t("Min Overtime")}: {user?.job?.minOvertime} {props.t("mins")}
                          </p>
                          <Table columns={columns(props.t)} dataSource={user?.workingTimes}/>
                        </Panel>
                      </Collapse>
                    </Col>
                    <Col></Col>
                    <Col>
                      <LeaveDayModal />
                    </Col>
                    <Col className="d-flex justify-content-end">
                      <DatePicker
                        onChange={onChange}
                        defaultValue={dayjs}
                        size={"large"}
                        picker="month"
                        format={"MM/YYYY"}
                      />
                    </Col>
                  </Row>
                  {/* <Row
                    style={{ marginTop: 15 }}
                    className="d-flex justify-content-end"
                  >
                    <Col sm="3">
                      <div className="rounded overflow-hidden">
                        <div className="bg-info p-4 bg-soft">
                          <h5 className="my-2 text-info">
                            Type: {user?.job?.workingTimeType}
                          </h5>
                        </div>
                      </div>
                    </Col>
                    <Col sm="3">
                      <div className="rounded overflow-hidden">
                        <div className="bg-warning p-4 bg-soft">
                          <h5 className="my-2 text-warning">
                            Min:{" "}
                            {user?.job?.workingTimeType === "FULLTIME"
                              ? "8h/day"
                              : user?.job?.minHours + "h/month"}
                          </h5>
                        </div>
                      </div>
                    </Col>
                    <Col sm="3">
                      <div className="rounded overflow-hidden">
                        <div className="bg-success p-4 bg-soft">
                          <h5 className="my-2 text-success">
                            Vacation: {vacation} days (max {user?.job?.maxHours}{" "}
                            days)
                          </h5>
                        </div>
                      </div>
                    </Col>
                  </Row> */}
                  <Row>
                    <Col>
                      <TimeLogsTable id={id} month={month} tr={props.t} />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Calender.propTypes = {
  events: PropTypes.array,
  categories: PropTypes.array,
  className: PropTypes.string,
  onGetEvents: PropTypes.func,
  onAddNewEvent: PropTypes.func,
  onUpdateEvent: PropTypes.func,
  onDeleteEvent: PropTypes.func,
  onGetCategories: PropTypes.func,
}

export default withTranslation()(Calender)
