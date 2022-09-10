import axios from 'axios';

axios.defaults.baseURL = 'https://6315b41c5b85ba9b11e54536.mockapi.io' 

export const fetchContacts = async () => {
  
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const addContact = async contact => {
   try{
    const response = await axios.post('/contacts', contact).then(response => response.data)
    console.log(response.data)
    return response.data
   } catch (error){
    console.log(error)
   }
  };


  export const delContact = async id => {
    try{
     const response = await axios.delete('/contacts').then(response => response.data)
     console.log(response.data)
     return response.data
    } catch (error){
     console.log(error)
    }
   };
