import React from 'react';
import PropTypes from 'prop-types';
import { List, Btn } from './ContactList.styled';


export const ContactList = ({ contacts, onLeaveFeedback }) =>
  contacts.map(({ id, name, phone }) => {
         return (
      <List key={id}>
        {name}: {phone}
        <Btn type="button" onClick={() => onLeaveFeedback(id)} id={id}>
          Delete
        </Btn>
      </List>
    );
  });

ContactList.protoType = {
  onClick: PropTypes.func.isRequired,
};
