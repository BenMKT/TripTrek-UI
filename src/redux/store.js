import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import carsReducer from './cars/carsSlice';
import userReducer from './users/userSlice';
import localStorageMiddleware from '../middleware/localStorage';

const persistConfig = {
  key: 'root', // key for the persist
  storage, // storage we're using, localStorage in our case
};

const rootReducer = combineReducers({
  // combine the cars and user reducers into a single root reducer
  cars: carsReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer); // the actual reducer
import reservationReducer  from './reservations/reservationsSlice';

const store = configureStore({
  reducer: persistedReducer,
  reducer: {
    cars: carsReducer,
    user: userReducer,
    reservations: reservationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
export const persistor = persistStore(store);
