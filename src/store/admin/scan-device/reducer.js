import {
  GET_SCAN_DEVICES_SUCCESS,
  GET_SCAN_DEVICES_FAIL,
  ADD_SCAN_DEVICE_SUCCESS,
  ADD_SCAN_DEVICE_FAIL,
  UPDATE_SCAN_DEVICE_SUCCESS,
  UPDATE_SCAN_DEVICE_FAIL,
  DELETE_SCAN_DEVICE_SUCCESS,
  DELETE_SCAN_DEVICE_FAIL,
  GET_CARDS_SUCCESS,
  GET_CARDS_FAIL,
  ADD_CARD_SUCCESS,
  ADD_CARD_FAIL,
  DELETE_CARD_SUCCESS,
  DELETE_CARD_FAIL,
  GET_WAITING_LIST_CARD_SUCCESS,
  GET_WAITING_LIST_CARD_FAIL,
  ADD_WAITING_LIST_CARD_SUCCESS,
  ADD_WAITING_LIST_CARD_FAIL,
  DELETE_WAITING_LIST_CARD_SUCCESS,
  DELETE_WAITING_LIST_CARD_FAIL,
  GET_LICENSE_SCAN_DEVICE_SUCCESS,
  GET_LICENSE_SCAN_DEVICE_FAIL
} from "./actionTypes"

const INIT_STATE = {
  devices: [],
  cards: [],
  waitingCards: [],
  error: {},
  licenseFile: ""
}

const ScanDevices = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_SCAN_DEVICES_SUCCESS:
      return {
        ...state,
        devices: action.payload.data
      }

    case GET_SCAN_DEVICES_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    case ADD_SCAN_DEVICE_SUCCESS:
      return {
        ...state,
        devices: action.payload.data,
      }

    case ADD_SCAN_DEVICE_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    case UPDATE_SCAN_DEVICE_SUCCESS:
      return {
        ...state,
        devices: action.payload.data,
      }

    case UPDATE_SCAN_DEVICE_FAIL:
      return {
        ...state,
        error: action.payload,
      }

      case GET_LICENSE_SCAN_DEVICE_SUCCESS:
        return {
          ...state,
          licenseFile: action.payload,
        }
  
      case GET_LICENSE_SCAN_DEVICE_FAIL:
        return {
          ...state,
          error: action.payload,
        }
    case DELETE_SCAN_DEVICE_SUCCESS:
      return {
        ...state,
        devices: action.payload.data,
      }

    case DELETE_SCAN_DEVICE_FAIL:
      return {
        ...state,
        error: action.payload,
      }
      case GET_CARDS_SUCCESS:
        return {
          ...state,
          cards: action.payload.data,
        }
  
      case GET_CARDS_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case ADD_CARD_SUCCESS:
        return {
          ...state,
          cards: action.payload.data,
        }
  
      case ADD_CARD_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case DELETE_CARD_SUCCESS:
        return {
          ...state,
          cards: action.payload.data,
        }
  
      case DELETE_CARD_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case DELETE_CARD_SUCCESS:
        return {
          ...state,
          cards: action.payload.data,
        }
  
      case DELETE_CARD_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case GET_WAITING_LIST_CARD_SUCCESS:
        return {
          ...state,
          waitingCards: action.payload.data,
        }
  
      case GET_WAITING_LIST_CARD_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case ADD_WAITING_LIST_CARD_SUCCESS:
        return {
          ...state,
          waitingCards: action.payload.data,
        }
  
      case ADD_WAITING_LIST_CARD_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        
        case DELETE_WAITING_LIST_CARD_SUCCESS:
          return {
            ...state,
            waitingCards: action.payload.data,
          }
    
        case DELETE_WAITING_LIST_CARD_FAIL:
          return {
            ...state,
            error: action.payload,
          }
    default:
      return state
  }
}

export default ScanDevices
