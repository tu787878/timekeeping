import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { GET_STAFFS, UPDATE_STAFFS} from "./actionTypes"

import {
  getStaffsSuccess,
  getStaffsFail,
  updateStaffsFail,
  updateStaffsSuccess,
} from "./actions"

//Include Both Helper File with needed methods
import {getStaffs, updateStaffs } from "../../../helpers/fakebackend_helper"

function* fetchStaffs() {
  try {
    const response = yield call(getStaffs)
    let datas = response.data
    yield put(getStaffsSuccess(datas))
  } catch (error) {
    yield put(getStaffsFail(error))
  }
}

function* updateStaff({ payload: staff }) {
  try {
    const response = yield call(updateStaffs, staff)
    yield put(updateStaffsSuccess(response))
  } catch (error) {
    yield put(updateStaffsFail(error))
  }
}

function* staffsSaga() {
  yield takeEvery(GET_STAFFS, fetchStaffs)
  yield takeEvery(UPDATE_STAFFS, updateStaff)
}

export default staffsSaga;
