import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { GET_ALL_NOTIFICATION, GET_NEWEST_NOTIFICATION, MARK_READ_NOTIFICATION, GET_TOTAL_NOTIFICATIONS } from "./actionTypes"

import {
  getAllNotificationsSuccess,
  getAllNotificationsFail,
  getTotalNotificationsSuccess,
  getTotalNotificationsFail,
  getNewestNotificationsSuccess,
  getNewestNotificationsFail,
  markReadNotificationSuccess,
  markReadNotificationFail
} from "./actions"

//Include Both Helper File with needed methods
import {getAllNotifications, getNewestNotifications, mardReadNotification, getTotalNotifications } from "../../helpers/fakebackend_helper"

function* fetchTotalNotifications() {
  try {
    const response = yield call(getTotalNotifications)
    let datas = response.data
    yield put(getTotalNotificationsSuccess(datas))
  } catch (error) {
    yield put(getTotalNotificationsFail(error))
  }
}

function* fetchAllNotifications(paging) {
  try {
    console.log(paging);
    const response = yield call(getAllNotifications, paging.payload)
    let datas = response.data
    yield put(getAllNotificationsSuccess(datas))
  } catch (error) {
    yield put(getAllNotificationsFail(error))
  }
}

function* fetchNewestNotifications() {
  try {
    const response = yield call(getNewestNotifications)
    let datas = response.data
    yield put(getNewestNotificationsSuccess(datas))
  } catch (error) {
    yield put(getNewestNotificationsFail(error))
  }
}

function* onMarkReadNotification(noti) {
  try {
    const response = yield call(mardReadNotification, noti)
    let datas = response.data
    yield put(markReadNotificationSuccess(datas))
  } catch (error) {
    yield put(markReadNotificationFail(error))
  }
}

function* notificationsSaga() {
  yield takeEvery(GET_TOTAL_NOTIFICATIONS, fetchTotalNotifications)
  yield takeEvery(GET_ALL_NOTIFICATION, fetchAllNotifications)
  yield takeEvery(GET_NEWEST_NOTIFICATION, fetchNewestNotifications)
  yield takeEvery(MARK_READ_NOTIFICATION, onMarkReadNotification)
}

export default notificationsSaga;
