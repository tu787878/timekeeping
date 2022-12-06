import {
  GET_TEAMS_SUCCESS,
  GET_TEAMS_FAIL,
  ADD_TEAMS_SUCCESS,
  ADD_TEAMS_FAIL,
  UPDATE_TEAMS_SUCCESS,
  UPDATE_TEAMS_FAIL,
  DELETE_TEAMS_SUCCESS,
  DELETE_TEAMS_FAIL,
} from "./actionTypes"

const INIT_STATE = {
  teams: [],
  error: {},
}

const Teams = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_TEAMS_SUCCESS:
      return {
        ...state,
        teams: action.payload,
      }

      case GET_TEAMS_FAIL:
        return {
          ...state,
          error: action.payload,
        }

        case ADD_TEAMS_SUCCESS:
          return {
            ...state,
            teams: action.payload,
          }
    
          case ADD_TEAMS_FAIL:
            return {
              ...state,
              error: action.payload,
            }
      case UPDATE_TEAMS_SUCCESS:
        return {
          ...state,
          teams: action.payload,
        }
      case UPDATE_TEAMS_FAIL:
        return {
          ...state,
          error: action.payload,
        }

        case DELETE_TEAMS_SUCCESS:
          return {
            ...state,
            teams: action.payload,
          }
        case DELETE_TEAMS_FAIL:
          return {
            ...state,
            error: action.payload,
          }
    default:
      return state
  }
}

export default Teams
