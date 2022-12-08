import {
  GET_ALL_NOTIFICATION,
  GET_ALL_NOTIFICATION_SUCCESS,
  GET_ALL_NOTIFICATION_FAIL,
  GET_NEWEST_NOTIFICATION,
  GET_NEWEST_NOTIFICATION_SUCCESS,
  GET_NEWEST_NOTIFICATION_FAIL,
  MARK_READ_NOTIFICATION,
  MARK_READ_NOTIFICATION_SUCCESS,
  MARK_READ_NOTIFICATION_FAIL,
  GET_TOTAL_NOTIFICATIONS,
  GET_TOTAL_NOTIFICATIONS_SUCCESS,
  GET_TOTAL_NOTIFICATIONS_FAIL,
} from "./actionTypes"

export const getTotalNotifications = () => ({
  type: GET_TOTAL_NOTIFICATIONS,
})

export const getTotalNotificationsSuccess = (data) => ({
  type: GET_TOTAL_NOTIFICATIONS_SUCCESS,
  payload: data
})

export const getTotalNotificationsFail = (error) => ({
  type: GET_TOTAL_NOTIFICATIONS_FAIL,
  payload: error
})

export const getAllNotifications = (paging) => ({
  type: GET_ALL_NOTIFICATION,
  payload: paging
})

export const getAllNotificationsSuccess = (data) => ({
  type: GET_ALL_NOTIFICATION_SUCCESS,
  payload: data
})

export const getAllNotificationsFail = (error) => ({
  type: GET_ALL_NOTIFICATION_FAIL,
  payload: error
})

export const getNewestNotifications = () => ({
  type: GET_NEWEST_NOTIFICATION,
})

export const getNewestNotificationsSuccess = (data) => ({
  type: GET_NEWEST_NOTIFICATION_SUCCESS,
  payload: data
})

export const getNewestNotificationsFail = (error) => ({
  type: GET_NEWEST_NOTIFICATION_FAIL,
  payload: error
})

export const markReadNotification = (noti) => ({
  type: MARK_READ_NOTIFICATION,
  payload: noti
})

export const markReadNotificationSuccess = (data) => ({
  type: MARK_READ_NOTIFICATION_SUCCESS,
  payload: data
})

export const markReadNotificationFail = (error) => ({
  type: MARK_READ_NOTIFICATION_FAIL,
  payload: error
})



