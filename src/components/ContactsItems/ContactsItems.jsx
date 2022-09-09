import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {fetchContacts} from '../../redux/contacts/contactsOperations'


const ContactsItems = () => {
    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchContacts())
    ,[dispatch])


}


