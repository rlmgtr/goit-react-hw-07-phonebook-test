import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://669d1b6115704bb0e30526bc.mockapi.io/api/v1/';


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll', 

 
  async (_, thunkAPI) => {
    try {
     
      const response = await axios.get('/contacts');

     
      console.log('Datele din API:', response.data);

      
      return response.data;
    } catch (error) {
      
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);