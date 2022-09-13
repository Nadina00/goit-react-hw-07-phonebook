import { useDeleteContactMutation } from "redux/contactsSlice";
import { List, Btn } from './ContactList.styled';

export const Contact = ({contact}) => {
    const [deleteContact, {isLoading}] = useDeleteContactMutation()
    return (
        <List key={contact.id}>
        {contact.name}: {contact.phone}
        <Btn type="button" onClick={() => deleteContact(contact.id)} id={contact.id} disabled={isLoading}>
          Delete
        </Btn>
      </List>
    )
}