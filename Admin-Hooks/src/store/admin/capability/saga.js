import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { GET_CAPABILITIES, UPDATE_CAPABILITIES} from "./actionTypes"

import {
  getCapabilitiesSuccess,
  getCapabilitiesFail,
  updateCapabilitiesFail,
  updateCapabilitiesSuccess,
} from "./actions"

//Include Both Helper File with needed methods
import {getCapabilities } from "../../../helpers/fakebackend_helper"

function* fetchCapabilities() {
  try {
    const response = yield call(getCapabilities)
    let datas = response.data
    yield put(getCapabilitiesSuccess(datas))
  } catch (error) {
    yield put(getCapabilitiesFail(error))
  }
}

function* capabilitiesSaga() {
  yield takeEvery(GET_CAPABILITIES, fetchCapabilities)
}

export default capabilitiesSaga;
