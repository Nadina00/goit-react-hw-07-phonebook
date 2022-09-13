//import { combineReducers } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import {changeFilter}  from './action';



 const filter  = createReducer('', {
  [changeFilter]: (state, action) => action.payload
})

export default filter

