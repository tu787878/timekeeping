import {
  GET_CAPABILITIES_SUCCESS,
  GET_CAPABILITIES_FAIL,
  UPDATE_CAPABILITIES_SUCCESS,
  UPDATE_CAPABILITIES_FAIL,
} from "./actionTypes"

const INIT_STATE = {
  capabilities: [],
  error: {},
}

const Capabilities = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_CAPABILITIES_SUCCESS:
      return {
        ...state,
        capabilities: action.payload,
      }

      case GET_CAPABILITIES_FAIL:
        return {
          ...state,
          capabilities: action.payload,
        }
      case UPDATE_CAPABILITIES_SUCCESS:
        return {
          ...state,
          team: action.payload,
        }
      case UPDATE_CAPABILITIES_FAIL:
        return {
          ...state,
          capabilities: action.payload,
        }
    default:
      return state
  }
}

export default Capabilities
