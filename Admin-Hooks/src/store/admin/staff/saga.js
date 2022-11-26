import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { GET_STAFFS, NEW_STAFF, UPDATE_STAFFS, RESET_STAFF, RESET_STAFF_SUCCESS} from "./actionTypes"

import {
  getStaffsSuccess,
  getStaffsFail,
  updateStaffsFail,
  updateStaffsSuccess,
  newStaffFail,
  newStaffSuccess,
  resetStaffSuccess,
} from "./actions"

//Include Both Helper File with needed methods
import {getStaffs, updateStaffs , newStaff} from "../../../helpers/fakebackend_helper"

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

function* onNewStaff({ payload: staff }) {
  try {
    const response = yield call(newStaff, staff)
    yield put(newStaffSuccess(response))
  } catch (error) {
    yield put(newStaffFail(error))
  }
}

function* onResetStaff({ payload: staff }) {
  yield put(resetStaffSuccess(staff))
}

function* staffsSaga() {
  yield takeEvery(GET_STAFFS, fetchStaffs)
  yield takeEvery(UPDATE_STAFFS, updateStaff)
  yield takeEvery(NEW_STAFF, onNewStaff)
  yield takeEvery(RESET_STAFF, onResetStaff)
}

export default staffsSaga;
