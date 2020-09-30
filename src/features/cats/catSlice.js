import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllCats = createAsyncThunk('cats/fetchAllCats', async () => {
  const res = await fetch('https://catfact.ninja/facts?limit=10');
  const data = await res.json();
  return data;
});

export const catsSlice = createSlice({
  name: 'cats',
  initialState: {
    facts: [],
  },
  extraReducers: {
    [fetchAllCats.pending]: (state, action) => {
      state.isFetching = true;
    },
    [fetchAllCats.fulfilled]: (state, action) => {
      state.facts = action.payload.data;
    },
    [fetchAllCats.rejected]: (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    },
  },
});

export const selectFacts = (state) => state.cats.facts;

export default catsSlice.reducer;
