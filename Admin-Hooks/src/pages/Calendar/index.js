import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { isEmpty } from "lodash"

import { Link, withRouter } from "react-router-dom"
//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css"
import Flatpickr from "react-flatpickr"

import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Table,
  FormGroup,
  InputGroup,
  DropdownToggle,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap"

import * as Yup from "yup"
import { useFormik } from "formik"

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin, { Draggable } from "@fullcalendar/interaction"
import BootstrapTheme from "@fullcalendar/bootstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//import Images
import verification from "../../assets/images/verification-img.png"

import profile1 from "assets/images/profile-img.png"

import {
  addNewEvent as onAddNewEvent,
  deleteEvent as onDeleteEvent,
  getCategories as onGetCategories,
  getEvents as onGetEvents,
  updateEvent as onUpdateEvent,
} from "../../store/actions"

import DeleteModal from "./DeleteModal"

//css
import "@fullcalendar/bootstrap/main.css"

//redux
import { useSelector, useDispatch } from "react-redux"

const Calender = props => {
  //meta title
  document.title = "Full Calendar | Skote - React Admin & Dashboard Template"

  const dispatch = useDispatch()

  const [event, setEvent] = useState({})

  // events validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      title: (event && event.title) || "",
      category: (event && event.category) || "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Please Enter Your Event Name"),
      category: Yup.string().required("Please Select Your Category"),
    }),
    onSubmit: values => {
      if (isEdit) {
        const updateEvent = {
          id: event.id,
          title: values.title,
          classNames: values.category + " text-white",
          start: event.start,
        }
        // update event
        dispatch(onUpdateEvent(updateEvent))
        validation.resetForm()
      } else {
        const newEvent = {
          id: Math.floor(Math.random() * 100),
          title: values["title"],
          start: selectedDay ? selectedDay.date : new Date(),
          className: values.category + " text-white",
        }
        // save new event
        dispatch(onAddNewEvent(newEvent))
        validation.resetForm()
      }
      setSelectedDay(null)
      toggle()
    },
  })

  // category validation
  const categoryValidation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      title: (event && event.title) || "",
      category: (event && event.category) || "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Please Enter Your Event Name"),
      category: Yup.string().required("Please Enter Your Billing Name"),
    }),
    onSubmit: values => {
      const newEvent = {
        id: Math.floor(Math.random() * 100),
        title: values["title"],
        start: selectedDay ? selectedDay.date : new Date(),
        className: values.event_category
          ? values.event_category + " text-white"
          : "bg-danger text-white",
      }
      // save new event

      dispatch(onAddNewEvent(newEvent))
      toggleCategory()
    },
  })

  const { events, categories } = useSelector(state => ({
    events: state.calendar.events,
    categories: state.calendar.categories,
  }))

  const [modal, setModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [modalcategory, setModalcategory] = useState(false)

  const [selectedDay, setSelectedDay] = useState(0)
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    dispatch(onGetCategories())
    dispatch(onGetEvents())
  }, [dispatch])

  useEffect(() => {
    if (!modal && !isEmpty(event) && !!isEdit) {
      setTimeout(() => {
        setEvent({})
        setIsEdit(false)
      }, 500)
    }
  }, [modal, event])

 const renderBalance = str => {
   let val = parseFloat(str);
    if(val >= 0)
       return (<Badge className="badge-soft-success me-1">
       {convertNumToTime(parseFloat(str))}
       </Badge>)
    return (<Badge className="badge-soft-danger me-1">
    {convertNumToTime(parseFloat(str))}
    </Badge>);
 }

 function convertNumToTime(number) {
  // Check sign of given number
  var sign = (number >= 0) ? 1 : -1;

  // Set positive value of number of sign negative
  number = number * sign;

  // Separate the int from the decimal part
  var hour = Math.floor(number);
  var decpart = number - hour;

  var min = 1 / 60;
  // Round to nearest minute
  decpart = min * Math.round(decpart / min);

  var minute = Math.floor(decpart * 60) + '';

  // Add padding if need
  if (minute.length < 2) {
  minute = '0' + minute; 
  }

  // Add Sign in final result
  sign = sign == 1 ? '' : '-';

  // Concate hours and minutes
  let time = sign + hour + ':' + minute;

  return time;
}

  /**
   * Handling the modal state
   */
  const toggle = () => {
    if (modal) {
      setModal(false)
      setEvent(null)
    } else {
      setModal(true)
    }
  }

  const toggleCategory = () => {
    setModalcategory(!modalcategory)
  }

  /**
   * Handling date click on calendar
   */
  const handleDateClick = arg => {
    const date = arg["date"]
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    const currectDate = new Date()
    const currentHour = currectDate.getHours()
    const currentMin = currectDate.getMinutes()
    const currentSec = currectDate.getSeconds()
    const modifiedDate = new Date(
      year,
      month,
      day,
      currentHour,
      currentMin,
      currentSec
    )
    const modifiedData = { ...arg, date: modifiedDate }

    setSelectedDay(modifiedData)
    toggle()
  }

  /**
   * Handling click on event on calendar
   */
  const handleEventClick = arg => {
    const event = arg.event
    setEvent({
      id: event.id,
      title: event.title,
      title_category: event.title_category,
      start: event.start,
      className: event.classNames,
      category: event.classNames[0],
      event_category: event.classNames[0],
    })
    setIsEdit(true)
    toggle()
  }

  /**
   * On delete event
   */
  const handleDeleteEvent = () => {
    dispatch(onDeleteEvent(event))
    setDeleteModal(false)
    toggle()
  }

  /**
   * On category darg event
   */
  const onDrag = event => {
    event.preventDefault()
  }

  /**
   * On calendar drop event
   */
  const onDrop = event => {
    const date = event["date"]
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    const currectDate = new Date()
    const currentHour = currectDate.getHours()
    const currentMin = currectDate.getMinutes()
    const currentSec = currectDate.getSeconds()
    const modifiedDate = new Date(
      year,
      month,
      day,
      currentHour,
      currentMin,
      currentSec
    )

    const draggedEl = event.draggedEl
    const draggedElclass = draggedEl.className
    if (
      draggedEl.classList.contains("external-event") &&
      draggedElclass.indexOf("fc-event-draggable") == -1
    ) {
      const modifiedData = {
        id: Math.floor(Math.random() * 100),
        title: draggedEl.innerText,
        start: modifiedDate,
        className: draggedEl.className,
      }
      dispatch(onAddNewEvent(modifiedData))
    }
  }

  const [info_dropup1, setInfo_dropup1] = useState(false)

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteEvent}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <Container fluid={true}>
          {/* Render Breadcrumb */}
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
                        Van Tu Nguyen
                      </h5>
                      <p className="text-muted mb-0 text-truncate">Coder</p>
                    </Col>
                    <Col>
                      <FormGroup className="mb-4">
                        <Label>Date Range</Label>
                        <InputGroup>
                          <Flatpickr
                            className="form-control d-block"
                            placeholder="Select range"
                            options={{
                              mode: "range",
                              dateFormat: "Y-m-d",
                            }}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col className="d-flex justify-content-end">
                      <Dropdown
                        isOpen={info_dropup1}
                        direction="right"
                        className="btn-group dropend"
                        toggle={() => setInfo_dropup1(!info_dropup1)}
                      >
                        <DropdownToggle className="btn btn-danger" caret>
                          Exportieren <i className="mdi mdi-chevron-right" />
                        </DropdownToggle>
                        <DropdownMenu data-popper-placement="right-start">
                          <DropdownItem>PDF exportieren</DropdownItem>
                          <DropdownItem>Excel exportieren</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                  </Row>
                  <Row
                    style={{ marginTop: 15 }}
                    className="d-flex justify-content-end"
                  >
                    <Col>
                      <div className="rounded overflow-hidden">
                        <div className="bg-info p-4 bg-soft">
                          <h5 className="my-2 text-info">Work hours: 35</h5>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="rounded overflow-hidden">
                        <div className="bg-warning p-4 bg-soft">
                          <h5 className="my-2 text-warning">Paid absence: 7</h5>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="rounded overflow-hidden">
                        <div className="bg-success p-4 bg-soft">
                          <h5 className="my-2 text-success">Total: 42</h5>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="rounded overflow-hidden">
                        <div className="bg-danger p-4 bg-soft">
                          <h5 className="my-2 text-danger">Regular: 40</h5>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="rounded overflow-hidden">
                        <div className="bg-primary p-4 bg-soft">
                          <h5 className="my-2 text-primary">Overtime: 2</h5>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 15 , maxHeight: '700px', overflowY: 'auto'}}>
                    <div className="table-responsive">
                      <Table className="table mb-0" hover bordered responsive height="200">
                        <thead>
                          <tr>
                            <th></th>
                            <th>DW</th>
                            <th>Date</th>
                            <th>Time logs</th>
                            <th>Total time</th>
                            <th>Regular time</th>
                            <th>Overtime</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                        {events.map(function (day, indexDay) {
                          return(
                          <tr key={indexDay} className={day.dayOfWeek === "SATURDAY" ?  "table-light" : (day.dayOfWeek === "SUNDAY" ? "table-light" : "")}>
                            <td>
                              {
                                day.status === "INVALID" ? <Badge className="badge-soft-danger me-1">
                                <i className="fas fa-exclamation"></i>
                              </Badge> : null
                              }
                              
                            </td>
                            <td scope="row">{day.dayOfWeek}</td>
                            <td scope="row">{day.date}</td>
                            <td>
                              {day.timeLogs.map(function (timelog, indexTimeLog){
                                return (
                                  <p key={indexTimeLog}>{timelog.timeFrom} - {timelog.timeTo}</p>
                                )
                              })}
                            </td>
                            <td>{convertNumToTime(parseFloat(day.total))}</td>
                            <td>{convertNumToTime(parseFloat(day.regularTime))}</td>
                            <td>
                              {renderBalance(day.balance)}
                            </td>
                            <td>
                              <Button
                                color="warning"
                                outline
                              >
                                Edit
                              </Button>
                            </td>
                          </tr>)
                          })}
                         
                        </tbody>
                      </Table>
                    </div>
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

export default Calender
