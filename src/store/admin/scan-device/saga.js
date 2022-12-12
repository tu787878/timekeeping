import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import * as type from "./actionTypes"

import * as actions from "./actions"

//Include Both Helper File with needed methods
import {
  getScanDevices, 
  updateScanDevice,
  deleteScanDevice,
  addScanDevice,
  getCards,
  addCard,
  deleteCard,
  getWaitingCards,
  addWaitingCard,
  deleteWaitingCard,
  getLicenseDevice
} from "../../../helpers/fakebackend_helper"

function* onGetScanDevices() {
  try {
    const response = yield call(getScanDevices)
    yield put(actions.getScanDevicesSuccess(response))
  } catch (error) {
    yield put(actions.getScanDevicesFail(error))
  }
}

function* onAddScanDevice({payload: device}) {
  try {
    const response = yield call(addScanDevice, device)
    yield put(actions.addScanDeviceSuccess(response))
  } catch (error) {
    yield put(actions.addScanDeviceSuccess(error))
  }
}

function* onUpdateScanDevice({payload: device}) {
  try {
    const response = yield call(updateScanDevice, device)
    yield put(actions.updateScanDeviceSuccess(response))
  } catch (error) {
    yield put(actions.updateScanDeviceFail(error))
  }
}

function* onDeleteScanDevice({payload: device}) {
  try {
    const response = yield call(deleteScanDevice, device)
    yield put(actions.deleteScanDeviceSuccess(response))
    yield put(actions.getWaitingListCards(2))
  } catch (error) {
    yield put(actions.deleteScanDeviceFail(error))
  }
}

function* onGetCards({payload: deviceId}) {
  try {
    const response = yield call(getCards,deviceId)
    yield put(actions.getCardsSuccess(response))
  } catch (error) {
    yield put(actions.getCardsFail(error))
  }
}

function* onAddCard({payload: card}) {
  try {
    const response = yield call(addCard,card)
    yield put(actions.addCardSuccess(response))
  } catch (error) {
    yield put(actions.addCardFail(error))
  }
}

function* onDeleteCard({payload: card}) {
  try {
    const response = yield call(deleteCard,card)
    yield put(actions.deleteCardSuccess(response))
  } catch (error) {
    yield put(actions.deleteCardFail(error))
  }
}

function* onGetWaitingCard({payload: deviceId}) {
  try {
    const response = yield call(getWaitingCards, deviceId)
    yield put(actions.getWaitingListCardsSuccess(response))
  } catch (error) {
    yield put(actions.getWaitingListCardsCardFail(error))
  }
}

function* onAddWaitingCard({payload: card}) {
  try {
    const response = yield call(addWaitingCard, card)
    yield put(actions.addWaitingListCardSuccess(response))
  } catch (error) {
    yield put(actions.addWaitingListCardFail(error))
  }
}

function* onDeleteWaitingCard({payload: card}) {
  try {
    const response = yield call(deleteWaitingCard, card)
    yield put(actions.deleteWaitingListCardsSuccess(response))
  } catch (error) {
    yield put(actions.deleteWaitingListCardsCardFail(error))
  }
}

function* onGetLicenseDevice({payload: device}) {
  try {
    const response = yield call(getLicenseDevice, device)
    yield put(actions.getLicenseScanDeviceSuccess(response))
  } catch (error) {
    yield put(actions.getLicenseScanDeviceFail(error))
  }
}

function* scanDevicesSaga() {
  yield takeEvery(type.GET_SCAN_DEVICES, onGetScanDevices)
  yield takeEvery(type.ADD_SCAN_DEVICE, onAddScanDevice)
  yield takeEvery(type.UPDATE_SCAN_DEVICE, onUpdateScanDevice)
  yield takeEvery(type.DELETE_SCAN_DEVICE, onDeleteScanDevice)
  yield takeEvery(type.GET_CARDS, onGetCards)
  yield takeEvery(type.ADD_CARD, onAddCard)
  yield takeEvery(type.DELETE_CARD, onDeleteCard)
  yield takeEvery(type.GET_WAITING_LIST_CARD, onGetWaitingCard)
  yield takeEvery(type.ADD_WAITING_LIST_CARD, onAddWaitingCard)
  yield takeEvery(type.DELETE_WAITING_LIST_CARD, onDeleteWaitingCard)
  yield takeEvery(type.GET_LICENSE_SCAN_DEVICE, onGetLicenseDevice)
}

export default scanDevicesSaga;
