import {
  GET_STAFFS,
  GET_STAFFS_SUCCESS,
  GET_STAFFS_FAIL,
  UPDATE_STAFFS,
  UPDATE_STAFFS_SUCCESS,
  UPDATE_STAFFS_FAIL,
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

