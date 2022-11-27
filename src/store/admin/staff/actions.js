import {
  GET_STAFFS,
  GET_STAFFS_SUCCESS,
  GET_STAFFS_FAIL,
  UPDATE_STAFFS,
  UPDATE_STAFFS_SUCCESS,
  UPDATE_STAFFS_FAIL,
  NEW_STAFF,
  NEW_STAFF_FAIL,
  NEW_STAFF_SUCCESS,
  RESET_STAFF,
  RESET_STAFF_SUCCESS
} from "./actionTypes"

export const getStaffs = () => ({
  type: GET_STAFFS,
})

export const getStaffsSuccess = staffs => ({
  type: GET_STAFFS_SUCCESS,
  payload: staffs,
})

export const getStaffsFail = error => ({
  type: GET_STAFFS_FAIL,
  payload: error,
})

export const updateStaffs = staff => ({
  type: UPDATE_STAFFS,
  payload: staff,
})

export const updateStaffsSuccess = staff => ({
  type: UPDATE_STAFFS_SUCCESS,
  payload: staff,
})

export const updateStaffsFail = error => ({
  type: UPDATE_STAFFS_FAIL,
  payload: error,
})

export const newStaff = staff => ({
  type: NEW_STAFF,
  payload: staff,
})

export const newStaffSuccess = staff => ({
  type: NEW_STAFF_SUCCESS,
  payload: staff,
})

export const newStaffFail = error => ({
  type: NEW_STAFF_FAIL,
  payload: error,
})

export const resetStaff = error => ({
  type: RESET_STAFF,
  payload: error,
})

export const resetStaffSuccess = error => ({
  type: RESET_STAFF_SUCCESS,
  payload: error,
})

