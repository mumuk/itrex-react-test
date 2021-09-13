import {FETCH_DATA, GET_CURRENT_ITEM} from "../store/types";


const dataDefaultState = {
  items: [],
  currentItem: {},
  isFetching: true
}

export default (state = dataDefaultState, action) => {
   // console.log(action.payload)
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        items: action.payload,
        isFetching: false
      }
    case GET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload
      }
    default:
      return state
  }
}