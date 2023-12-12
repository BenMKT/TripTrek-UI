import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCars = createAsyncThunk('cars/fetchCars', async (payload, thunkAPI) => {
  const url = 'http://localhost:3000/api/v1/cars';
  try {
    const { user } = thunkAPI.getState();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `${user.auth.token}`,
    };
    const response = await axios.get(url, { headers });

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const addACar = createAsyncThunk('cars/addACar', async (car, thunkAPI) => {
  const url = 'http://localhost:3000/api/v1/cars';
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
  const url = `http://localhost:3000/api/v1/cars/${carId}`;
  try {
    const { user } = thunkAPI.getState();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `${user.auth.token}`,
    };
    const response = await axios.delete(url, { headers });
    return response.data;
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(`something went wrong: ${error.response}`);
  }
});

export { fetchCars, addACar, removeACar };
