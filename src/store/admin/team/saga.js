import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { GET_TEAMS, UPDATE_TEAMS, DELETE_TEAMS, ADD_TEAMS} from "./actionTypes"

import {
  getTeamsSuccess,
  getTeamsFail,
  updateTeamsFail,
  updateTeamsSuccess,
  deleteTeamsFail,
  deleteTeamsSuccess,
  addTeamsFail,
  addTeamsSuccess
} from "./actions"

//Include Both Helper File with needed methods
import {getTeams, updateTeams, deleteTeams, addTeams } from "../../../helpers/fakebackend_helper"

function* fetchTeams() {
  try {
    const response = yield call(getTeams)
    let datas = response.data
    datas.map(data => {
      data.tags = data.tags.split(";");
    })
    yield put(getTeamsSuccess(datas))
  } catch (error) {
    yield put(getTeamsFail(error))
  }
}

function* updateTeam({ payload: team }) {
  try {
    const response = yield call(updateTeams, team)
    let datas = response.data
    datas.map(data => {
      data.tags = data.tags.split(";");
    })
    yield put(updateTeamsSuccess(datas))
  } catch (error) {
    yield put(updateTeamsFail(error))
  }
}

function* deleteTeam({ payload: team }) {
  try {
    const response = yield call(deleteTeams, team)
    let datas = response.data
    datas.map(data => {
      data.tags = data.tags.split(";");
    })
    yield put(deleteTeamsSuccess(datas))
  } catch (error) {
    yield put(deleteTeamsFail(error))
  }
}

function* addTeam({ payload: team }) {
  try {
    const response = yield call(addTeams, team)
    let datas = response.data
    datas.map(data => {
      data.tags = data.tags.split(";");
    })
    yield put(addTeamsSuccess(datas))
  } catch (error) {
    yield put(addTeamsFail(error))
  }
}

function* teamsSaga() {
  yield takeEvery(GET_TEAMS, fetchTeams)
  yield takeEvery(UPDATE_TEAMS, updateTeam)
  yield takeEvery(DELETE_TEAMS, deleteTeam)
  yield takeEvery(ADD_TEAMS, addTeam)
}

export default teamsSaga;
