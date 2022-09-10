import React, { useEffect } from 'react';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { useSelector, useDispatch  } from "react-redux";
import { addContactsList, delContactsList, fetchContactsList } from '../redux/contacts/contactsOperations';
import {changeFilter}  from 'redux/action';
import PropTypes from 'prop-types';

export function App() {
     
  const dispatch = useDispatch();

  const filterCont = useSelector(state => state.contacts.filter);
  
      
  useEffect(()=> {
    dispatch(fetchContactsList())
  }, [dispatch])

  const itemContacts = useSelector(state => state.contacts.items)
  
  console.log(fetchContactsList())

  const addContactItem = ({name, phone}) => {
    console.log(phone)
    const searchName = name.toLowerCase();
    itemContacts.find(contact => contact.name.toLowerCase() === searchName)
      ? alert('contact is already in contacts')
      : dispatch(addContactsList({name, phone}));
  };

  const handleDelete = id => {
        dispatch(delContactsList(id));
  };

  
  const handleFindChange = evt => {
    console.log(evt.target.value)
    dispatch(changeFilter(evt.target.value));
   
  };

  const getVisibleContacts = itemContacts.filter(contact => 
    contact.name.toString().toLowerCase().includes(filterCont.toLowerCase())
  );
    
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContactItem} />
      <h2>Contacts</h2>
      <ul>
        <ContactList
          contacts={getVisibleContacts}
          onLeaveFeedback={handleDelete}
        />
      </ul>
      <Filter value={filterCont} onChange={handleFindChange} />
    </div>
  );
}


App.protoType = {
  state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  filter: PropTypes.string.isRequired,
};
