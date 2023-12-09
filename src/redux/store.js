import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/carsSlice';


const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
