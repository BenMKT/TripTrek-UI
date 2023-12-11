import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCars = createAsyncThunk('cars/fetchCars',
  async (thunkApi) => thunkApi);

const addACar = createAsyncThunk('cars/addACar', async (car, thunkAPI) => {
  const url = `http://localhost:3000/api/v1/cars`;
  try {
    const response = await axios.post(url, car);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export { fetchCars, addACar };
