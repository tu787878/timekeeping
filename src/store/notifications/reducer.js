import {
  GET_ALL_NOTIFICATION_SUCCESS,
  GET_ALL_NOTIFICATION_FAIL,
  GET_NEWEST_NOTIFICATION_SUCCESS,
  GET_NEWEST_NOTIFICATION_FAIL,
  MARK_READ_NOTIFICATION_SUCCESS,
  MARK_READ_NOTIFICATION_FAIL,
  GET_TOTAL_NOTIFICATIONS_SUCCESS,
  GET_TOTAL_NOTIFICATIONS_FAIL
} from "./actionTypes"

const INIT_STATE = {
  allNotifications: [],
  newestNotification: [],
  status: {},
  error: {},
  totalNotifications: 0
}

const Notifications = (state = INIT_STATE, action) => {
  switch (action.type) {

    case GET_TOTAL_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        totalNotifications: action.payload,
      }

    case GET_TOTAL_NOTIFICATIONS_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    case GET_ALL_NOTIFICATION_SUCCESS:
      return {
        ...state,
        allNotifications: action.payload,
      }

    case GET_ALL_NOTIFICATION_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case GET_NEWEST_NOTIFICATION_SUCCESS:
      return {
        ...state,
        newestNotification: action.payload,
      }

    case GET_NEWEST_NOTIFICATION_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    case MARK_READ_NOTIFICATION_SUCCESS:
      return {
        ...state,
        status: action.payload,
      }

    case MARK_READ_NOTIFICATION_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default Notifications
