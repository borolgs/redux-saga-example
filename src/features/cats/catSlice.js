import { createSlice } from '@reduxjs/toolkit';

export const catsSlice = createSlice({
  name: 'cats',
  initialState: {
    facts: [],
  },
  reducers: {
    fetchAllRequest: (state, action) => {
      state.isFetching = true;
    },
    fetchAllSuccess: (state, action) => {
      state.facts = action.payload.data;
    },
    fetchAllFail: (state, action) => {
      state.isFetching = false;
      state.error = action.payload.message;
    },
  },
});

export const { actions: catActions } = catsSlice;

export const selectFacts = (state) => state.cats.facts;

export default catsSlice.reducer;
