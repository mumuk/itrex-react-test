import axios from "axios"
import {FETCH_DATA, FETCH_DATA_FAIL, GET_CURRENT_ITEM, SET_TEXT_FILTER} from "../store/types";

const URL = 'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json'

export const fetchData=()=> async(dispatch)=>{
  try{
    const res =await axios.get(URL);
    dispatch({
      type:FETCH_DATA,
      payload:res.data
    })
  }catch (e) {
    dispatch({
      type:FETCH_DATA_FAIL,
      payload:console.log(e)
    })
  }
}

export const getCurrent=(payload)=>({type:GET_CURRENT_ITEM,payload})
export const setTextFilter = (payload) => ({type: SET_TEXT_FILTER, payload})