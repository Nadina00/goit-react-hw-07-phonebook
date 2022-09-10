import { combineReducers } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import {  delContactsRequest, delContactsSuccess, delContactsError,  changeFilter}  from './action';
import {fetchContactsList, addContactsList} from './contacts/contactsOperations'

const itemsReducer = createReducer([{ id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' }, { "name":"love","phone":"555-22-22","id":"30" },{ id: 'id-3', name: 'Rosie Simpson', phone: '459-12-56' }],{ 
    [fetchContactsList.fulfilled]: (state, action) => action.payload,
    [addContactsList.fulfilled]: (state, { payload }) => [...state, payload],
    [delContactsSuccess]: (state, { payload }) =>
  state.filter(contact => {
        return contact.id !== payload;
  }),
  })
  console.log(fetchContactsList())
  

const isLoadingReduser = createReducer(false, {
    [fetchContactsList.pending]: ()=> true,
    [fetchContactsList.fulfilled]: ()=> false,
    [fetchContactsList.error]: ()=> false,

    [addContactsList.pending]: ()=> true,
    [addContactsList.fulfilled]: ()=> false,
    [addContactsList.error]: ()=> false,

    [delContactsRequest]: ()=> true,
    [delContactsSuccess]: ()=> false,
    [delContactsError]: ()=> false

})

const errorReduser = createReducer(null, {
  [fetchContactsList.pending]: ()=> null,
  [fetchContactsList.error]: (state, action)=> action.payload
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

