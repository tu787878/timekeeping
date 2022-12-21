import React from "react"
import PropTypes from "prop-types"
import "flatpickr/dist/themes/material_blue.css"
import Flatpickr from "react-flatpickr"
import { useState, useEffect } from "react"
import { get } from "../../helpers/api_helper"
import * as url from "../../helpers/url_helper"
import dayjs from 'dayjs';
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
import {useParams} from "react-router-dom";
import { DatePicker } from 'antd';
const Calender = () => {
  //meta title
  document.title = "Full Calendar | Skote - React Admin & Dashboard Template"
  const {id} = useParams()
  const [user, setUser] = useState(null);
  const [vacation, setVacation] = useState(0);
  const [month, setmonth] = useState(dayjs(new Date()));
  const obj = JSON.parse(localStorage.getItem("authUser"))

  const toTime = (minutes) => {
    let negative = false;
    if (minutes < 0) negative = true;
  
    minutes = Math.abs(minutes);
    var m = minutes % 60;
    var h = (minutes - m) / 60;
    return (negative ? "-" : "") + h + ":" + m + ((m < 10) ? "0" : "");
  }

  
  const onGetVacation = () => {
    get(url.BASE + "/account/" + obj.account.id + "/total-vacation?month=" + month.format("DD/MM/YYYY"))
    .then(data => {
      console.log(data);
      setVacation(data.data/60/8);
    }).catch(err => {
      console.log(err);
    })
  }


  useEffect(() => {
    if(id === undefined){
      get(url.GET_STAFFS + "/" + obj.account.id).then(data=>{
        setUser(data.data);
      })
    }else{
      get(url.GET_STAFFS + "/" + id).then(data=>{
        setUser(data.data);
      })
    }

  }, [])

  useEffect(() => {
    onGetVacation()
  }, [month])



  const onChange = (values) => {
    console.log(values);
    setmonth(values);
    // dispatch(onGetEvents({id:obj.account.id, month:month.format('DD/MM/YYYY')}))
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Calendar" breadcrumbItem="Full Calendar" />
          <Row>
            <Col>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col xs="7">
                      <div className="text-primary p-3">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>It will seem like simplified</p>
                      </div>
                    </Col>
                    <Col xs="5" className="align-self-end">
                      <img src={profile1} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <Row className="align-items-center">
                    <Col sm="4">
                      <div className="avatar-md profile-user-wid mb-4">
                        <img
                          src="/static/media/avatar-1.3921191a8acf79d3e907.jpg"
                          alt=""
                          className="img-thumbnail rounded-circle"
                        />
                      </div>
                      <h5 className="font-size-15 text-truncate">
                        {user?.userDetail?.firstName} {" "} {user?.userDetail?.lastName}
                      </h5>
                      <p className="text-muted mb-0 text-truncate">{user?.job?.name}</p>
                    </Col>
                    <Col>
                      <DatePicker onChange={onChange} defaultValue={dayjs} size={"large"} picker="month" format={"MM/YYYY"} />
                    </Col>
                    <Col className="d-flex justify-content-end">
                      {/* <Dropdown
                        direction="right"
                        className="btn-group dropend"
                      >
                        <DropdownToggle className="btn btn-danger" caret>
                          Exportieren <i className="mdi mdi-chevron-right" />
                        </DropdownToggle>
                        <DropdownMenu data-popper-placement="right-start">
                          <DropdownItem>PDF exportieren</DropdownItem>
                          <DropdownItem>Excel exportieren</DropdownItem>
                        </DropdownMenu>
                      </Dropdown> */}
                    </Col>
                  </Row>
                  <Row
                    style={{ marginTop: 15 }}
                    className="d-flex justify-content-end"
                  >
                    <Col>
                      <div className="rounded overflow-hidden">
                        <div className="bg-info p-4 bg-soft">
                          <h5 className="my-2 text-info">Type: {user?.job?.workingTimeType}</h5>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="rounded overflow-hidden">
                        <div className="bg-warning p-4 bg-soft">
                          <h5 className="my-2 text-warning">Min: {user?.job?.workingTimeType === "FULLTIME" ? "8h/day" : (user?.job?.minHours + "h/month")}</h5>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="rounded overflow-hidden">
                        <div className="bg-success p-4 bg-soft">
                          <h5 className="my-2 text-success">Vacation: {vacation} days (max {user?.job?.maxHours} days)</h5>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <TimeLogsTable id={id} month={month}/>
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

export default Calender
