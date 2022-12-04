import {
  GET_SCAN_DEVICES,
  GET_SCAN_DEVICES_SUCCESS,
  GET_SCAN_DEVICES_FAIL,
  ADD_SCAN_DEVICE,
  ADD_SCAN_DEVICE_SUCCESS,
  ADD_SCAN_DEVICE_FAIL,
  UPDATE_SCAN_DEVICE,
  UPDATE_SCAN_DEVICE_SUCCESS,
  UPDATE_SCAN_DEVICE_FAIL,
  DELETE_SCAN_DEVICE,
  DELETE_SCAN_DEVICE_SUCCESS,
  DELETE_SCAN_DEVICE_FAIL,
  GET_CARDS,
  GET_CARDS_SUCCESS,
  GET_CARDS_FAIL,
  ADD_CARD,
  ADD_CARD_SUCCESS,
  ADD_CARD_FAIL,
  DELETE_CARD,
  DELETE_CARD_SUCCESS,
  DELETE_CARD_FAIL,
  GET_WAITING_LIST_CARD,
  GET_WAITING_LIST_CARD_SUCCESS,
  GET_WAITING_LIST_CARD_FAIL,
  ADD_WAITING_LIST_CARD,
  ADD_WAITING_LIST_CARD_SUCCESS,
  ADD_WAITING_LIST_CARD_FAIL,
  DELETE_WAITING_LIST_CARD,
  DELETE_WAITING_LIST_CARD_SUCCESS,
  DELETE_WAITING_LIST_CARD_FAIL,
  GET_LICENSE_SCAN_DEVICE,
  GET_LICENSE_SCAN_DEVICE_SUCCESS,
  GET_LICENSE_SCAN_DEVICE_FAIL
} from "./actionTypes"

export const getScanDevices = () => ({
  type: GET_SCAN_DEVICES,
})
export const getScanDevicesSuccess = (devices) => ({
  type: GET_SCAN_DEVICES_SUCCESS,
  payload: devices
})
export const getScanDevicesFail = (error) => ({
  type: GET_SCAN_DEVICES_FAIL,
  error: error
})


export const addScanDevice = (scanDevice) => ({
  type: ADD_SCAN_DEVICE,
  payload: scanDevice
})
export const addScanDeviceSuccess = (scanDevices) => ({
  type: ADD_SCAN_DEVICE_SUCCESS,
  payload: scanDevices
})
export const addScanDeviceFail = (error) => ({
  type: ADD_SCAN_DEVICE_FAIL,
  payload: error
})


export const updateScanDevice = (scanDevice) => ({
  type: UPDATE_SCAN_DEVICE,
  payload: scanDevice
})
export const updateScanDeviceSuccess = (scanDevices) => ({
  type: UPDATE_SCAN_DEVICE_SUCCESS,
  payload: scanDevices
})
export const updateScanDeviceFail = (error) => ({
  type: UPDATE_SCAN_DEVICE_FAIL,
  payload: error
})

export const getLicenseScanDevice = (device) =>({
  type: GET_LICENSE_SCAN_DEVICE,
  payload: device
})

export const getLicenseScanDeviceSuccess = (link) => ({
  type: GET_LICENSE_SCAN_DEVICE_SUCCESS,
  payload: link
})
export const getLicenseScanDeviceFail = (error) => ({
  type: GET_LICENSE_SCAN_DEVICE_FAIL,
  payload: error
})


export const deleteScanDevice = (scanDevice) => ({
  type: DELETE_SCAN_DEVICE,
  payload: scanDevice
})
export const deleteScanDeviceSuccess = (scanDevices) => ({
  type: DELETE_SCAN_DEVICE_SUCCESS,
  payload: scanDevices
})
export const deleteScanDeviceFail = (error) => ({
  type: DELETE_SCAN_DEVICE_FAIL,
  payload: error
})

export const getCards = (deviceId) => ({
  type: GET_CARDS,
  payload: deviceId
})
export const getCardsSuccess = (cards) => ({
  type: GET_CARDS_SUCCESS,
  payload: cards
})
export const getCardsFail = (error) => ({
  type: GET_CARDS_FAIL,
  payload: error
})

export const addCard = (card) => ({
  type: ADD_CARD,
  payload: card
})
export const addCardSuccess = (cards) => ({
  type: ADD_CARD_SUCCESS,
  payload: cards
})
export const addCardFail = (error) => ({
  type: ADD_CARD_FAIL,
  payload: error
})

export const deleteCard = (card) => ({
  type: DELETE_CARD,
  payload: card
})
export const deleteCardSuccess = (cards) => ({
  type: DELETE_CARD_SUCCESS,
  payload: cards
})
export const deleteCardFail = (error) => ({
  type: DELETE_CARD_FAIL,
  payload: error
})

export const getWaitingListCards = (deviceId) => ({
  type: GET_WAITING_LIST_CARD,
  payload: deviceId
})
export const getWaitingListCardsSuccess = (waitingListCards) => ({
  type: GET_WAITING_LIST_CARD_SUCCESS,
  payload: waitingListCards
})
export const getWaitingListCardsCardFail = (error) => ({
  type: GET_WAITING_LIST_CARD_FAIL,
  payload: error
})

export const addWaitingListCard = (card) => ({
  type: ADD_WAITING_LIST_CARD,
  payload: card
})
export const addWaitingListCardSuccess = (cards) => ({
  type: ADD_WAITING_LIST_CARD_SUCCESS,
  payload: cards
})
export const addWaitingListCardFail = (error) => ({
  type: ADD_WAITING_LIST_CARD_FAIL,
  payload: error
})

export const deleteWaitingListCards = (waitingListCard) => ({
  type: DELETE_WAITING_LIST_CARD,
  payload: waitingListCard
})
export const deleteWaitingListCardsSuccess = (waitingListCards) => ({
  type: DELETE_WAITING_LIST_CARD_SUCCESS,
  payload: waitingListCards
})
export const deleteWaitingListCardsCardFail = (error) => ({
  type: DELETE_WAITING_LIST_CARD_FAIL,
  payload: error
})

