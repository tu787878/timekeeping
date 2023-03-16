import { call, put, takeEvery } from "redux-saga/effects"
import dayjs from 'dayjs';
// Crypto Redux States
import { GET_STAFFS, NEW_STAFF, UPDATE_STAFFS, DELETE_STAFFS, RESET_STAFF, RESET_STAFF_SUCCESS} from "./actionTypes"

import {
  getStaffsSuccess,
  getStaffsFail,
  updateStaffsFail,
  updateStaffsSuccess,
  deleteStaffsFail,
  deleteStaffsSuccess,
  newStaffFail,
  newStaffSuccess,
  resetStaffSuccess,
} from "./actions"

//Include Both Helper File with needed methods
import {getStaffs, updateStaffs , newStaff, deleteStaffs} from "../../../helpers/fakebackend_helper"

function* fetchStaffs() {
  try {
    const response = yield call(getStaffs)
    let datas = response.data
    console.log(datas);
    datas.forEach(data => {
      if(data.workingTimes)
      {
        const tmp = data.workingTimes.map(wt => {
          return{
            timeFrom : dayjs( wt.timeFrom, "HH:mm"),
            timeTo : dayjs( wt.timeTo,  "HH:mm"),
            id: wt.id,
            breakTime: wt.breakTime,
            total: wt.total,
            dayOfWeek: wt.dayOfWeek
          }
        })
        data.workingTimes = tmp
      }
      console.log(data.workingTimes);
    })
    
    yield put(getStaffsSuccess(datas))
  } catch (error) {
    yield put(getStaffsFail(error))
  }
}

function* updateStaff({ payload: staff }) {
  try {
    const response = yield call(updateStaffs, staff)
    let datas = response.data
    datas.forEach(data => {
      if(data.workingTimes)
      {
        const tmp = data.workingTimes.map(wt => {
          return{
            timeFrom : dayjs( wt.timeFrom, "HH:mm"),
            timeTo : dayjs( wt.timeTo,  "HH:mm"),
            id: wt.id,
            breakTime: wt.breakTime,
            total: wt.total,
            dayOfWeek: wt.dayOfWeek
          }
        })
        data.workingTimes = tmp
      }
    })
    yield put(updateStaffsSuccess(datas))
  } catch (error) {
    yield put(updateStaffsFail(error))
  }
}

function* deleteStaff({ payload: staff }) {
  try {
    const response = yield call(deleteStaffs, staff)
    let datas = response.data
    datas.forEach(data => {
      if(data.workingTimes)
      {
        const tmp = data.workingTimes.map(wt => {
          return{
            timeFrom : dayjs( wt.timeFrom, "HH:mm"),
            timeTo : dayjs( wt.timeTo,  "HH:mm"),
            id: wt.id,
            breakTime: wt.breakTime,
            total: wt.total,
            dayOfWeek: wt.dayOfWeek
          }
        })
        data.workingTimes = tmp
      }
    })
    yield put(deleteStaffsSuccess(datas))
  } catch (error) {
    yield put(deleteStaffsFail(error))
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
  yield takeEvery(DELETE_STAFFS, deleteStaff)
  yield takeEvery(NEW_STAFF, onNewStaff)
  yield takeEvery(RESET_STAFF, onResetStaff)
}

export default staffsSaga;
