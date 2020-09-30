import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import catSaga from '../features/cats/catSaga';
import catSlice from '../features/cats/catSlice';

const logger = createLogger({ collapsed: true });
const saga = createSagaMiddleware();

export default configureStore({
  reducer: {
    cats: catSlice,
  },
  middleware: [
    ...getDefaultMiddleware({
      immutableCheck: true,
    }).concat(logger),
    saga,
  ],
});

saga.run(catSaga);
