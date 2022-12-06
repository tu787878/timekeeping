import {
  GET_TEAMS,
  GET_TEAMS_SUCCESS,
  GET_TEAMS_FAIL,
  ADD_TEAMS,
  ADD_TEAMS_SUCCESS,
  ADD_TEAMS_FAIL,
  UPDATE_TEAMS,
  UPDATE_TEAMS_SUCCESS,
  UPDATE_TEAMS_FAIL,
  DELETE_TEAMS,
  DELETE_TEAMS_SUCCESS,
  DELETE_TEAMS_FAIL,
} from "./actionTypes"

export const getTeams = () => ({
  type: GET_TEAMS,
})

export const getTeamsSuccess = teams => ({
  type: GET_TEAMS_SUCCESS,
  payload: teams,
})

export const getTeamsFail = error => ({
  type: GET_TEAMS_FAIL,
  payload: error,
})

export const addTeams = (team) => ({
  type: ADD_TEAMS,
  payload: team
})

export const addTeamsSuccess = teams => ({
  type: ADD_TEAMS_SUCCESS,
  payload: teams,
})

export const addTeamsFail = error => ({
  type: ADD_TEAMS_FAIL,
  payload: error,
})

export const updateTeams = team => ({
  type: UPDATE_TEAMS,
  payload: team,
})

export const updateTeamsSuccess = team => ({
  type: UPDATE_TEAMS_SUCCESS,
  payload: team,
})

export const updateTeamsFail = error => ({
  type: UPDATE_TEAMS_FAIL,
  payload: error,
})

export const deleteTeams = team => ({
  type: DELETE_TEAMS,
  payload: team,
})

export const deleteTeamsSuccess = team => ({
  type: DELETE_TEAMS_SUCCESS,
  payload: team,
})

export const deleteTeamsFail = error => ({
  type: DELETE_TEAMS_FAIL,
  payload: error,
})

