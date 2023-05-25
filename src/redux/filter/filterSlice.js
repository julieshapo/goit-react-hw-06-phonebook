import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    findContact(state, action) {
      //   console.log(state);
      //   console.log(action);
      return action.payload;
    },
  },
});

export const { findContact } = filterSlice.actions;

export default filterSlice.reducer;

// Selector
export const getFilter = state => state.filter;
