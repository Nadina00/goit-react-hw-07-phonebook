import axios from 'axios'
import *as contactsAPI from '../../service/contactsAPI'
import { createAsyncThunk } from '@reduxjs/toolkit';
import {addContactsRequest, addContactsSuccess, addContactsError, delContactsRequest, delContactsSuccess, delContactsError, fetchContactsRequest, fetchContactsSuccess, fetchContactsError} from '../action'



export const fetchContactsListc = () => dispatch => {
 
  dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

export const fetchContactsLists = createAsyncThunk(
  'contacts/fetchContacts',
  async() => {
    try{
      axios
      .get('/contacts')
      .then(res => res.data).then(console.log)
    } catch (error){
      console.error(error);
    }
  }
)

export const fetchContactsList = createAsyncThunk(
  'contacts/fetchContacts',
  async() => {
    try{
     const res = await contactsAPI.fetchContacts()
     console.log(res)
     return res
    } catch (error){
      console.error(error);
    }
  }
)

export const addContactsLists = (name, phone) => dispatch => {
  const contact = { name, phone };
  console.log(contact)

  dispatch(addContactsRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch(error => dispatch(addContactsError(error)));
};

export const addContactsList =  createAsyncThunk(
  'contacts/addContacts',
  async ({name, phone}) => {
    const contact = {name, phone}
      console.log(contact)  
    try{
      axios
      .post('/contacts', contact)
      .then(response => response.data).then(console.log)
    
    }      catch (error) {
        console.error(error);
      }
   
    }
)


export const delContactsLists = (id) => dispatch => {
  dispatch(delContactsRequest());
    axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(delContactsSuccess(id)))
    .catch(error => dispatch(delContactsError(error)));
};

export const delContactsList = createAsyncThunk(
  'contacts/delContacts',
  async(id) => {
console.log(id)
    try{
      axios
      .delete(`/contacts/${id}`)
      .then(console.log)
    
    }      catch (error) {
        console.error(error);
      }
  }
)
