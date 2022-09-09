import React, { useEffect } from 'react';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { useSelector, useDispatch  } from "react-redux";
import { addContactsList, delContactsList } from '../redux/contacts/contactsOperations';
import {addContactsRequest, addContactsSuccess, addContactsError, delItem, changeFilter}  from 'redux/action';
import PropTypes from 'prop-types';



export function App() {
     
  const dispatch = useDispatch();

  const filterCont = useSelector(state => state.contacts.filter);
 
  const itemContact = useSelector(state => state.contacts.items)
      
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(itemContact));
  }, [itemContact]);

  const addContactItem = ({name, number}) => {
    const searchName = name.toLowerCase();
    itemContact.find(contact => contact.name.toLowerCase() === searchName)
      ? alert('contact is already in contacts')
      : dispatch(addContactsList(name, number));
  };

  const handleDelete = id => {
        dispatch(delContactsList(id));
  };

  
  const handleFindChange = evt => {
    console.log(evt.target.value)
    dispatch(changeFilter(evt.target.value));
   
  };


  const getVisibleContacts = itemContact.filter(contact =>
    contact.name.toLowerCase().includes(filterCont.toLowerCase())
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
