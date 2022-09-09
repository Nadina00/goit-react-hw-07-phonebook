import { combineReducers } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import { fetchContacts } from "service/contactsAPI";
import {fetchContactsRequest, fetchContactsSuccess, fetchContactsError, addContactsRequest, addContactsSuccess, addContactsError, delContactsRequest, delContactsSuccess, delContactsError, delItem, changeFilter}  from './action';
import {fetchContactsList, addContactsList} from './contacts/contactsOperations'

const itemsReducer = createReducer([{ id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' }],{ 
    [fetchContactsSuccess]: (state, action) => action.payload,
    [addContactsSuccess]: (state, { payload }) => [...state, payload],
    [delContactsSuccess]: (state, { payload }) =>
  state.filter(contact => {
        return contact.id !== payload;
  }),
  })
  console.log(itemsReducer)
  

const isLoadingReduser = createReducer(false, {
    [fetchContactsRequest]: ()=> true,
    [fetchContactsSuccess]: ()=> false,
    [fetchContactsError]: ()=> false,

    [addContactsRequest]: ()=> true,
    [addContactsSuccess]: ()=> false,
    [addContactsError]: ()=> false,

    [delContactsRequest]: ()=> true,
    [delContactsSuccess]: ()=> false,
    [delContactsError]: ()=> false

})

const errorReduser = createReducer(null, {
  [fetchContactsRequest]: ()=> null,
  [fetchContactsError]: (state, action)=> action.payload
})


 
 const filterReducer  = createReducer('', {
  [changeFilter]: (state, action) => action.payload
})

export default combineReducers({
  items: itemsReducer,
  isLoading: isLoadingReduser,
  error: errorReduser,
  filter: filterReducer 

})

