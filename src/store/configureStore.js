import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import React from "react"

import dataReducer from "../reducers/dataReducer";
import filtersReducers from "../reducers/filtersReducers"
import {composeWithDevTools} from "redux-devtools-extension"

const rootReducer=combineReducers({
  data:dataReducer,
  filters:filtersReducers
})

export const store=createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)