import {
  GET_CAPABILITIES,
  GET_CAPABILITIES_SUCCESS,
  GET_CAPABILITIES_FAIL,
  UPDATE_CAPABILITIES,
  UPDATE_CAPABILITIES_SUCCESS,
  UPDATE_CAPABILITIES_FAIL,
} from "./actionTypes"

export const getCapabilities = () => ({
  type: GET_CAPABILITIES,
})

export const getCapabilitiesSuccess = teams => ({
  type: GET_CAPABILITIES_SUCCESS,
  payload: teams,
})

export const getCapabilitiesFail = error => ({
  type: GET_CAPABILITIES_FAIL,
  payload: error,
})

export const updateCapabilities = team => ({
  type: UPDATE_CAPABILITIES,
  payload: team,
})

export const updateCapabilitiesSuccess = team => ({
  type: UPDATE_CAPABILITIES_SUCCESS,
  payload: team,
})

export const updateCapabilitiesFail = error => ({
  type: UPDATE_CAPABILITIES_FAIL,
  payload: error,
})

