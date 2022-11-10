import {
  GET_STAFFS_SUCCESS,
  GET_STAFFS_FAIL,
  UPDATE_STAFFS_SUCCESS,
  UPDATE_STAFFS_FAIL,
} from "./actionTypes"

const INIT_STATE = {
  staffs: [],
  error: {},
}

const Staffs = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_STAFFS_SUCCESS:
      return {
        ...state,
        staffs: action.payload,
      }

      case GET_STAFFS_FAIL:
        return {
          ...state,
          staffs: action.payload,
        }
      case UPDATE_STAFFS_SUCCESS:
        return {
          ...state,
          staff: action.payload,
        }
      case UPDATE_STAFFS_FAIL:
        return {
          ...state,
          staff: action.payload,
        }
    default:
      return state
  }
}

export default Staffs
