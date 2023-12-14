import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import carsReducer from './cars/carsSlice';
import userReducer from './users/userSlice';
import localStorageMiddleware from '../middleware/localStorage'; // the actual reducer
import reservationReducer from './reservations/reservationsSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  cars: carsReducer,
  user: userReducer,
  reservations: reservationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
export const persistor = persistStore(store);
