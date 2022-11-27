import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import {
  Container,
  Row,
  Card,
  CardBody,
  Col,
  CardTitle,
  Collapse,
  Table,
} from "reactstrap"
import { Link, withRouter } from "react-router-dom"

//redux
import { connect, useSelector, useDispatch } from "react-redux"
import classnames from "classnames"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import {
  getScanDevices,
  addScanDevice,
  updateScanDevice,
  deleteScanDevice,
  getCards,
  addCard,
  deleteCard,
  getWaitingListCards,
  addWaitingListCard,
  deleteWaitingListCards,
} from "store/actions"

const ScanDevice = props => {
  const [col1, setcol1] = useState(true)
  const { devices, onGetDevices } = props
  const { cards, onGetCards } = props
  const { waitingCards, onGetWaitingCards } = props
  const t_col1 = () => {
    setcol1(!col1)
  }

  useEffect(() => {
    onGetDevices()
  }, [onGetDevices])
  useEffect(() => {
    onGetCards(2)
  }, [onGetCards])
  useEffect(() => {
    onGetWaitingCards(1)
  }, [onGetWaitingCards])

  //meta title
  document.title = "New Page | Skote - React Admin & Dashboard Template"
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs
            title="Scan Device Manager"
            breadcrumbItem="Scan Device"
          />

          <Row>
            <Card>
              <CardBody>
                <Row>
                  <Col lg={12}>
                    <CardTitle className="h4">
                      Scan devices &nbsp; &nbsp; &nbsp;
                      <Link to="#" className="text-primary">
                        <i className="fas fa-plus-square h4 m-0" />
                      </Link>
                    </CardTitle>
                    <p className="card-title-desc"></p>

                    <div className="accordion" id="accordion">
                      {devices.map(function (device, i) {
                        return (
                          <div key={device.label} className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className={classnames(
                                  "accordion-button",
                                  "fw-medium",
                                  { collapsed: false }
                                )}
                                type="button"
                                onClick={t_col1}
                                style={{ cursor: "pointer" }}
                              >
                                {device.label}
                              </button>
                            </h2>

                            <Collapse
                              isOpen={true}
                              className="accordion-collapse"
                            >
                              {device.children.map(function (child, i) {
                                return (
                                  <div
                                    key={child.id}
                                    className="accordion-body"
                                  >
                                    <div className="table-responsive">
                                      <Table className="table-nowrap align-middle table-hover mb-0">
                                        <tbody>
                                          <tr>
                                            <td style={{ width: "45px" }}>
                                              <div className="avatar-sm">
                                                <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-24">
                                                  <i className="bx bxs-barcode" />
                                                </span>
                                              </div>
                                            </td>
                                            <td>
                                              <h5 className="font-size-14 mb-1">
                                                <Link
                                                  to="#"
                                                  className="text-dark"
                                                >
                                                  {child.name}
                                                </Link>
                                              </h5>
                                              <small>
                                                Status :{" "}
                                                {child.active
                                                  ? "active"
                                                  : "deactive"}
                                              </small>
                                            </td>
                                            <td>
                                              <div className="text-end">
                                                <Link
                                                  to="#"
                                                  className="text-dark"
                                                >
                                                  <i className="fas fa-file-download h4 m-0" />
                                                </Link>
                                                &nbsp; &nbsp; &nbsp;
                                                <Link
                                                  to="#"
                                                  className="text-dark"
                                                >
                                                  <i className="far fa-edit h4 m-0" />
                                                </Link>
                                                &nbsp; &nbsp; &nbsp;
                                                <Link
                                                  to="#"
                                                  className="text-danger"
                                                >
                                                  <i className="fas fa-trash-alt h4 m-0" />
                                                </Link>
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </Table>
                                    </div>
                                  </div>
                                )
                              })}
                            </Collapse>
                          </div>
                        )
                      })}
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Row>

          <Row>
            <Card>
              <CardBody>
                <Row>
                  <Col lg={12}>
                    <CardTitle className="h4">Cards</CardTitle>
                    <p className="card-title-desc"></p>

                    <div className="accordion" id="accordion">
                      {cards.map(function (card, i) {
                        return (
                          <div key={card.label} className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className={classnames(
                                  "accordion-button",
                                  "fw-medium",
                                  { collapsed: false }
                                )}
                                type="button"
                                onClick={t_col1}
                                style={{ cursor: "pointer" }}
                              >
                                {card.label}
                              </button>
                            </h2>

                            <Collapse
                              isOpen={true}
                              className="accordion-collapse"
                            >
                              <div className="accordion-body">
                                <div className="table-responsive">
                                  <Table className="table-nowrap align-middle table-hover mb-0">
                                    <tbody>
                                      {card.children.map(function (child, i) {
                                        return (
                                          <tr key={child.id}>
                                            <td style={{ width: "45px" }}>
                                              <div className="avatar-sm">
                                                <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-24">
                                                  <i className="bx bxs-credit-card" />
                                                </span>
                                              </div>
                                            </td>
                                            <td>
                                              <h5 className="font-size-14 mb-1">
                                                <Link
                                                  to="#"
                                                  className="text-dark"
                                                >
                                                  {
                                                    child.account.userDetail
                                                      .firstName
                                                  }{" "}
                                                  - {child.cardId}
                                                </Link>
                                              </h5>
                                              <small>
                                                Status :{" "}
                                                {child.active
                                                  ? "active"
                                                  : "deactive"}
                                              </small>
                                            </td>
                                            <td>
                                              <div className="text-end">
                                              <Link
                                                  to="#"
                                                  className="text-danger"
                                                >
                                                  <i className="fas fa-trash-alt h4 m-0" />
                                                </Link>
                                              </div>
                                            </td>
                                          </tr>
                                        )
                                      })}
                                    </tbody>
                                  </Table>
                                </div>
                              </div>
                            </Collapse>
                          </div>
                        )
                      })}
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Row>

          <Row>
            <Card>
              <CardBody>
                <Row>
                  <Col lg={12}>
                    <CardTitle className="h4">
                      Waiting List Cards &nbsp; &nbsp; &nbsp;
                      <Link to="#" className="text-primary">
                        <i className="fas fa-plus-square h4 m-0" />
                      </Link>
                    </CardTitle>
                    <p className="card-title-desc"></p>

                    <div className="accordion" id="accordion">
                      {waitingCards.map(function (card, i) {
                        return (
                          <div key={card.label} className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className={classnames(
                                  "accordion-button",
                                  "fw-medium",
                                  { collapsed: false }
                                )}
                                type="button"
                                onClick={t_col1}
                                style={{ cursor: "pointer" }}
                              >
                                {card.label}
                              </button>
                            </h2>

                            <Collapse
                              isOpen={true}
                              className="accordion-collapse"
                            >
                              <div className="accordion-body">
                                <div className="table-responsive">
                                  <Table className="table-nowrap align-middle table-hover mb-0">
                                    <tbody>
                                      {card.children.map(function (child, i) {
                                        return (
                                          <tr key={child.id}>
                                            <td style={{ width: "45px" }}>
                                              <div className="avatar-sm">
                                                <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-24">
                                                  <i className="bx bxs-credit-card" />
                                                </span>
                                              </div>
                                            </td>
                                            <td>
                                              <h5 className="font-size-14 mb-1">
                                                <Link
                                                  to="#"
                                                  className="text-dark"
                                                >
                                                  {
                                                    child.account.userDetail
                                                      .firstName
                                                  }{" "}
                                                  {
                                                    child.account.userDetail
                                                      .lastName
                                                  }
                                                </Link>
                                              </h5>
                                              <small>Status : waiting</small>
                                            </td>
                                            <td>
                                              <div className="text-end">
                                                <Link
                                                  to="#"
                                                  className="text-danger"
                                                >
                                                  <i className="fas fa-trash-alt h4 m-0" />
                                                </Link>
                                              </div>
                                            </td>
                                          </tr>
                                        )
                                      })}
                                    </tbody>
                                  </Table>
                                </div>
                              </div>
                            </Collapse>
                          </div>
                        )
                      })}
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  )
}

ScanDevice.propTypes = {
  devices: PropTypes.any,
  cards: PropTypes.any,
  waitingCards: PropTypes.any,
}

const mapStateToProps = ({ ScanDevices }) => ({
  devices: ScanDevices.devices,
  cards: ScanDevices.cards,
  waitingCards: ScanDevices.waitingCards,
})

const mapDispatchToProps = dispatch => ({
  onGetDevices: () => dispatch(getScanDevices()),
  onAddScanDevice: device => dispatch(addScanDevice(device)),
  onUpdateScanDevice: device => dispatch(updateScanDevice(device)),
  onDeleteScanDevice: device => dispatch(deleteScanDevice(device)),

  onGetCards: deviceId => dispatch(getCards(deviceId)),
  onAddCard: card => dispatch(addCard(card)),
  onDeleteCard: () => dispatch(deleteCard(card)),

  onGetWaitingCards: deviceId => dispatch(getWaitingListCards(deviceId)),
  onAddWaitingCard: card => dispatch(addCard(card)),
  onDeleteWaitingCard: card => dispatch(deleteWaitingListCards(card)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ScanDevice))
