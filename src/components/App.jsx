import React from 'react';
import PropTypes from 'prop-types';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { useSelector, useDispatch  } from "react-redux";
import {changeFilter}  from 'redux/action';
import { Loader } from './Loader/Loader';
import {useGetContactsQuery, useAddContactMutation} from '../redux/contactsSlice'

export function App() {
 
  const { data, isLoading } = useGetContactsQuery()
  
  const [addContact]= useAddContactMutation()
   
   const handleAddContact = async ({name, phone}) => {
    try{
      await addContact({name, phone});
      }catch(error) {
      console.log(error)
    }
   }
  
   const dispatch = useDispatch();

  const filterCont = useSelector(state => state.filter);
  console.log(filterCont)
 
  

   const handleFindChange = evt => {
    console.log(evt.target.value)
    dispatch(changeFilter(evt.target.value));}
 


  const getVisibleContacts = !filterCont
    ? data
    : data.filter(item =>
      item.name.toLowerCase().includes(filterCont.toLocaleLowerCase()))
   
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      {isLoading && <Loader/>}
      <ContactList contacts={getVisibleContacts} />
     
     <Filter value={filterCont} onChange={handleFindChange} />
    </div>
  );
}



App.protoType = {
  state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  filter: PropTypes.string.isRequired,
};
