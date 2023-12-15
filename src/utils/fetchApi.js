import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../redux/constants';

const fetchCars = createAsyncThunk('cars/fetchCars', async (payload, thunkAPI) => {
  const url = `${BASE_URL}api/v1/cars`;
  try {
    const { user } = thunkAPI.getState();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `${user.auth.token}`,
    };
    const response = await axios.get(url, { headers });

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(`something went wrong: ${error.response.data}`);
  }
});

const addACar = createAsyncThunk('cars/addACar', async (car, thunkAPI) => {
  const url = `${BASE_URL}api/v1/cars`;
  try {
    const { user } = thunkAPI.getState();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `${user.auth.token}`,
    };
    const response = await axios.post(url, car, { headers });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(`something went wrong: ${error.response.data}`);
  }
});

const removeACar = createAsyncThunk('cars/removeACar', async (carId, thunkAPI) => {
  const url = `${BASE_URL}api/v1/cars/${carId}`;
  try {
    const { user } = thunkAPI.getState();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `${user.auth.token}`,
    };
    const response = await axios.delete(url, { headers });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(`something went wrong: ${error.response.data}`);
  }
});

const createReservation = createAsyncThunk('reservations/createReservation', async (reservation, thunkAPI) => {
  const url = `${BASE_URL}api/v1/cars/${reservation.car_id}/reservations`;
  try {
    const { user } = thunkAPI.getState();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `${user.auth.token}`,
    };
    const response = await axios.post(url, reservation, { headers });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(`something went wrong: ${error.response.data}`);
  }
});

export {
  fetchCars, addACar, removeACar, createReservation,
};
