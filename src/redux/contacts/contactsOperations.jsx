import axios from 'axios'
import *as contactsAPI from '../../service/contactsAPI'
import { createAsyncThunk } from '@reduxjs/toolkit';
import {addContactsRequest, addContactsSuccess, addContactsError, delContactsRequest, delContactsSuccess, delContactsError, fetchContactsRequest, fetchContactsSuccess, fetchContactsError} from '../action'
import {fetchContacts, addContact} from '../../service/contactsAPI'


export const fetchContactsList = () => dispatch => {
 
  dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};


export const addContactsList = (name, phone) => dispatch => {
  const contact = { name, phone };

  dispatch(addContactsRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch(error => dispatch(addContactsError(error)));
};

export const delContactsList = (id) => dispatch => {
  dispatch(delContactsRequest());
    axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(delContactsSuccess(id)))
    .catch(error => dispatch(delContactsError(error)));
};
