import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import SockJsClient from 'react-stomp';
import {
  Container,
  Row,
  Card,
  CardBody,
  Col,
  CardTitle,
  Collapse,
  Table,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from "reactstrap"
import { Link, withRouter } from "react-router-dom"
import Select, { components } from "react-select";
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
  getLicenseScanDevice,
  getStaffs
} from "store/actions"
import ScanDevices from "store/admin/scan-device/reducer"

const ScanDevice = props => {
  const [modalScanDevice, setScanDeviceModal] = useState(false);
  const [modalDeleteScanDevice, setDeleteScanDeviceModal] = useState(false);
  const [modalUpdateScanDevice, setUpdateScanDeviceModal] = useState(false);
  const [modalDownloadScanDevice, setDownloadScanDeviceModal] = useState(false);
  //card
  const [modalAddCard, setAddCardModal] = useState(false);
  const [modalDeleteWaitingCard, setDeleteWaitingCardModal] = useState(false);
  const [modalDeleteCard, setDeleteCardModal] = useState(false);

  const [deleteScanDevice, setDeleteScanDevice] = useState(null);
  const [updateScanDevice, setUpdateScanDevice] = useState(null);
  const [downloadScanDevice, setDownloadScanDevice] = useState(null);

  //card
  const [deleteWaitingCard, setDeleteWaitingCard] = useState(null);
  const [deleteCard, setDeleteCard] = useState(null);

  const [deviceName, setDeviceName] = useState(null)
  const [deviceType, setDeviceType] = useState(0)
  const [cardDevice, setCardDevice] = useState(null)
  const [cardAccount, setCardAccount] = useState(null)

  const [col1, setcol1] = useState(true)
  const { devices, onGetDevices, onAddScanDevice, onDeleteScanDevice, onUpdateScanDevice, onGetLicenseScanDevice } = props
  const { cards, onGetCards , onAddCard, onDeleteCard} = props
  const { linkLicenseFile, onGetLinkLicenseFile } = props
  const { waitingCards, onGetWaitingCards, onAddWaitingCard , onDeleteWaitingCard} = props
  const { accounts, onGetAllAccounts } = props
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


  const toggleScanDevice = () => setScanDeviceModal(!modalScanDevice);
  const toggleDeleteScanDevice = () => setDeleteScanDeviceModal(!modalDeleteScanDevice);
  const toggleUpdateScanDevice = () => setUpdateScanDeviceModal(!modalUpdateScanDevice);
  const toggleDownloadScanDevice = () => setDownloadScanDeviceModal(!modalDownloadScanDevice);
  const toggleAddCard = () => setAddCardModal(!modalAddCard);
  const toggleDeleteWaitingCard = () => setDeleteWaitingCardModal(!modalDeleteWaitingCard);
  const toggleDeleteCard = () => setDeleteCardModal(!modalDeleteCard);
  const groupedOptions = []

  const addScanDeviceBtn = () => {
    onAddScanDevice({
      name: deviceName,
      type: deviceType
    });
    toggleScanDevice();
  }

  const addCardBtn = () => {
    console.log(cardAccount);
    if(cardAccount  != null && cardDevice != null){
      onAddWaitingCard({
        account: cardAccount,
        scanDevice: cardDevice
      });
    }
    toggleAddCard();
  }

  const deleteScanDeviceBtn = () => {
    if (deleteScanDevice != null) {
      onDeleteScanDevice(deleteScanDevice);
    }
    toggleDeleteScanDevice();
  }

  const deleteWaitingCardBtn = () => {
    if (deleteWaitingCard != null) {
      onDeleteWaitingCard(deleteWaitingCard);
    }
    toggleDeleteWaitingCard();
  }

  const deleteCardBtn = () => {
    if (deleteCard != null) {
      onDeleteCard(deleteCard);
    }
    toggleDeleteCard();
  }

  const updateScanDeviceBtn = () => {
    if (updateScanDevice != null) {
      onUpdateScanDevice(updateScanDevice);
    }
    toggleUpdateScanDevice();
  }

  const getLinkLicense = (device) => {
    if (device != null) {
      onGetLicenseScanDevice(device);
    }
  }

  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  //meta title
  document.title = "New Page | Skote - React Admin & Dashboard Template"
  return (
    <>
     <Alert color="info" isOpen={visible} toggle={onDismiss}>
      New card is registered!
    </Alert>
    <SockJsClient url='http://localhost:8080/websocket-chat/'
        topics={[`/topic/scan-device`]}
        onConnect={() => {
          console.log("connected");
        }}
        onDisconnect={() => {
          console.log("Disconnected");
        }}
        onMessage={(msg) => {
          console.log(msg);
          setVisible(true)
          onGetCards(2)
          onGetWaitingCards(2)
        }}
        ref={(client) => {
          // this.clientRef = client
        }} />
      {/* add waiting card */}
      <Modal isOpen={modalAddCard} toggle={toggleAddCard}>
        <ModalHeader toggle={toggleAddCard}>Register a card</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label
                for="exampleSelect1"
                sm={4}
              >
                Scan Device
              </Label>
              {devices?.map(device => {
                    groupedOptions.push( {
                      label:device.label,
                      options: device.children
                    });
                 })}
              <Col sm={8}>
                <Select
                  isMulti={false}
                  options={groupedOptions}
                  getOptionLabel={option =>`${option.name}`}
                  getOptionValue={option => option}
                  onChange={setCardDevice}
                >
                </Select>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label
                for="exampleSelect2"
                sm={4}
              >
               Select Account
              </Label>
              <Col sm={8}>
              <Select
                  isMulti={false}
                  options={accounts}
                  getOptionLabel={option =>`${option.userDetail.firstName} ${option.userDetail.lastName}`}
                  getOptionValue={option => option}
                  onChange={setCardAccount}
                >
                </Select>
              </Col>
            </FormGroup>
          </Form>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={addCardBtn}>
            Add
          </Button>{' '}
          <Button color="secondary" onClick={toggleAddCard}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      {/* add scan device modal */}
      <Modal isOpen={modalScanDevice} toggle={toggleScanDevice}>
        <ModalHeader toggle={toggleScanDevice}>Add a new device</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="deviceName">
                Device name
              </Label>
              <Input
                id="deviceName"
                name="deviceName"
                placeholder=""
                type="text"
                onChange={e => { setDeviceName(e.target.value) }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">
                Device Type
              </Label>
              <Input
                id="deviceType"
                name="select"
                type="select"
                onChange={e => { setDeviceType(e.target.value) }}
              >
                <option value={0}>
                  RFID
                </option>
              </Input>
            </FormGroup>
          </Form>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={addScanDeviceBtn}>
            Add
          </Button>{' '}
          <Button color="secondary" onClick={toggleScanDevice}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      {/* delete scan device modal */}
      <Modal isOpen={modalDeleteScanDevice} toggle={() => toggleDeleteScanDevice()}>
        <ModalHeader toggle={() => toggleDeleteScanDevice()}>Delete device</ModalHeader>
        <ModalBody>
          Do you want to device '{deleteScanDevice?.name}' ? It will delete all waiting cards of this scan device!
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => deleteScanDeviceBtn()}>
            Yes
          </Button>{' '}
          <Button color="secondary" onClick={() => toggleDeleteScanDevice()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

       {/* delete waiting card modal */}
       <Modal isOpen={modalDeleteWaitingCard} toggle={() => toggleDeleteWaitingCard()}>
        <ModalHeader toggle={() => toggleDeleteWaitingCard()}>Delete waiting card</ModalHeader>
        <ModalBody>
          Do you want to  delete card '{deleteWaitingCard?.is}' ? 
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => deleteWaitingCardBtn()}>
            Yes
          </Button>{' '}
          <Button color="secondary" onClick={() => toggleDeleteWaitingCard()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      {/* delete card modal */}
      <Modal isOpen={modalDeleteCard} toggle={() => toggleDeleteCard()}>
        <ModalHeader toggle={() => toggleDeleteCard()}>Delete registered card</ModalHeader>
        <ModalBody>
          Do you want to card '{deleteCard?.id}' ? 
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => deleteCardBtn()}>
            Yes
          </Button>{' '}
          <Button color="secondary" onClick={() => toggleDeleteCard()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      {/* download license scan device modal */}
      <Modal isOpen={modalDownloadScanDevice} toggle={() => toggleDownloadScanDevice()}>
        <ModalHeader toggle={() => toggleDownloadScanDevice()}>Download license for device {downloadScanDevice?.name}</ModalHeader>
        <ModalBody>
          <p> Instruction:</p>
          <Card>
            <CardBody>
              <p> Download source code:</p>
              <code>git clone https://github.com/tu787878/scan-device-rfid</code>
            </CardBody>
          </Card>
          
          <Card>
            <CardBody>
            <p> Create file license:</p>
              <code>cd scan-device-rfid</code>
              <br></br>
              <code>rm /license/RFIDLicense.txt </code>
              <br></br>
              <code>nano /license/RFIDLicense.txt </code>
            </CardBody>
          </Card>
            <Card>
            <CardBody>
              <p>Copy the following text to file:</p>
              <code>
                {linkLicenseFile}
              </code>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <p>Save and exit:</p>
              <code>
                Ctr + x
              </code>
              <br></br>
              <code>Press y to save</code>
            </CardBody>
          </Card>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => toggleDownloadScanDevice()}>
            Ok
          </Button>
        </ModalFooter>
      </Modal>

      {/* update scan device modal */}
      <Modal isOpen={modalUpdateScanDevice} toggle={() => toggleUpdateScanDevice()}>
        <ModalHeader toggle={() => toggleUpdateScanDevice()}>Update device

        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="deviceName">
                Device name
              </Label>
              <Input
                id="deviceName"
                name="deviceName"
                placeholder=""
                type="text"
                value={updateScanDevice?.name}
                onChange={e => {
                  // updateScanDevice.name = e.target.value;
                  setUpdateScanDevice({
                    ...updateScanDevice,
                    name: e.target.value
                  })
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">
                Device Type
              </Label>
              <Input
                id="deviceType"
                name="select"
                type="select"
              // value={updateScanDevice?.type}
              // onChange={e=>{setUpdateDeviceName(e.target.value)}}
              >
                <option value={0}>
                  RFID
                </option>
              </Input>
            </FormGroup>
            <FormGroup switch>
              <Label check>Active</Label>
              <Input
                type="switch"
                checked={updateScanDevice?.active}
                onClick={(e) => {
                  setUpdateScanDevice({
                    ...updateScanDevice,
                    active: !updateScanDevice.active
                  })
                }}
                onChange={() => {
                  console.log(updateScanDevice);
                }}
              />

            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={updateScanDeviceBtn}>
            Yes
          </Button>{' '}
          <Button color="secondary" onClick={() => toggleUpdateScanDevice()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

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
                      <Link onClick={toggleScanDevice} to="#" className="text-primary">
                        <i className="fas fa-plus-square h4 m-0" />
                      </Link>
                    </CardTitle>
                    <p className="card-title-desc"></p>

                    <div className="accordion" id="accordion">
                      {devices?.map(function (device, i) {
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
                                                  onClick={() => {
                                                    setDownloadScanDevice(child);
                                                    getLinkLicense(child);
                                                    toggleDownloadScanDevice();
                                                  }
                                                  }
                                                  to="#"
                                                  className="text-dark"
                                                >
                                                  <i className="fas fa-file-download h4 m-0" />
                                                </Link>
                                                &nbsp; &nbsp; &nbsp;
                                                <Link
                                                  onClick={() => {
                                                    setUpdateScanDevice(child)
                                                    toggleUpdateScanDevice()
                                                  }
                                                  }
                                                  to="#"
                                                  className="text-dark"
                                                >
                                                  <i className="far fa-edit h4 m-0" />
                                                </Link>
                                                &nbsp; &nbsp; &nbsp;
                                                <Link
                                                  onClick={() => {
                                                    setDeleteScanDevice(child)
                                                    toggleDeleteScanDevice()
                                                  }
                                                  }
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
                                                onClick={()=>{
                                                  setDeleteCard(child);
                                                  toggleDeleteCard();
                                                }}
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
                      <Link onClick={() => {
                        onGetAllAccounts();
                        toggleAddCard();
                      }} to="#" className="text-primary">
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
                                                onClick={()=>{
                                                  setDeleteWaitingCard(child);
                                                  deleteWaitingCardBtn();
                                                }}
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
  linkLicenseFile: PropTypes.any,
}

const mapStateToProps = ({ ScanDevices, Staffs }) => ({
  devices: ScanDevices.devices,
  cards: ScanDevices.cards,
  waitingCards: ScanDevices.waitingCards,
  linkLicenseFile: ScanDevices.licenseFile,
  accounts: Staffs.staffs
})

const mapDispatchToProps = dispatch => ({
  onGetDevices: () => dispatch(getScanDevices()),
  onAddScanDevice: device => dispatch(addScanDevice(device)),
  onUpdateScanDevice: device => dispatch(updateScanDevice(device)),
  onDeleteScanDevice: device => dispatch(deleteScanDevice(device)),
  onGetLicenseScanDevice: device => dispatch(getLicenseScanDevice(device)),

  onGetCards: deviceId => dispatch(getCards(deviceId)),
  onAddCard: card => dispatch(addCard(card)),
  onDeleteCard: (card) => dispatch(deleteCard(card)),

  onGetWaitingCards: deviceId => dispatch(getWaitingListCards(deviceId)),
  onAddWaitingCard: card => dispatch(addWaitingListCard(card)),
  onDeleteWaitingCard: card => dispatch(deleteWaitingListCards(card)),

  onGetAllAccounts: () => dispatch(getStaffs()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ScanDevice))
