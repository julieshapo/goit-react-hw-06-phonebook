import { createSlice, nanoid } from '@reduxjs/toolkit';
import initialContacts from '../../components/contacts.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    initContacts: initialContacts,
  },
  reducers: {
    addContact(state, action) {
      console.log(state);
      console.log(action);

      state.initContacts.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact(state, action) {
      state.initContacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
    findContact(state, action) {},
  },
});

export const { addContact, deleteContact, findContact } = contactsSlice.actions;

export default contactsSlice.reducer;
