import React , { useEffect }  from 'react';
import PropTypes from 'prop-types';
import { List, Btn } from './ContactList.styled';
import { useSelector, useDispatch  } from "react-redux";
import {fetchContactsList } from '../../redux/contacts/contactsOperations';

export const ContactList = ({onLeaveFeedback }) =>{

const dispatch = useDispatch();

const filterCont = useSelector(state => state.contacts.filter);
  
      
  useEffect(()=> {
    dispatch(fetchContactsList())
  }, [dispatch])

  const itemContacts = useSelector(state => state.contacts.items)
  console.log(itemContacts)

  const getVisibleContacts = itemContacts.filter(contact => 
    contact.name.toString().toLowerCase().includes(filterCont.toLowerCase()));
    
    getVisibleContacts.map(({ id, name, phone }) => {
        return (
     <List key={id}>
       {name}: {phone}
       <Btn type="button" onClick={() => onLeaveFeedback(id)} id={id}>
         Delete
       </Btn>
     </List>
   );
 })

  
          }    

ContactList.protoType = {
  onClick: PropTypes.func.isRequired,
};
