import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: '',
  },
});
