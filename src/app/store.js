import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import catSlice from '../features/cats/catSlice';

const logger = createLogger({ collapsed: true });

export default configureStore({
  reducer: {
    cats: catSlice,
  },
  middleware: [
    ...getDefaultMiddleware({
      immutableCheck: true,
    }).concat(logger),
    thunk,
  ],
});
