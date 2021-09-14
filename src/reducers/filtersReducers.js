import {SET_TEXT_FILTER, SORT_BY_ASCEND, SORT_BY_DESCEND} from "../store/types";

const filtersDefaultState = {
  text: "",
  sortBy:""
}

export default (state = filtersDefaultState, action) => {
   console.log(action.payload)
  switch (action.type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: action.payload
      }
    case SORT_BY_ASCEND:
      return {
        ...state,
        sortBy: "ascend"
      }
    case SORT_BY_DESCEND:
      return {
        ...state,
        sortBy: "descend"
      }
    default:
      return state
  }
}