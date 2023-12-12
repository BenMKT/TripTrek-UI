import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/carsSlice';
import userReducer from './users/userSlice';
import localStorageMiddleware from '../middleware/localStorage';
import reservationReducer  from './reservations/reservationsSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    user: userReducer,
    reservations: reservationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
