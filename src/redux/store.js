import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/carsSlice';
import userReducer from './users/userSlice';
import localStorageMiddleware from '../middleware/localStorage';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
