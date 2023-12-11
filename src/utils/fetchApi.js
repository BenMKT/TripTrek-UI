import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCars = createAsyncThunk('cars/fetchCars',
  async (thunkApi) => thunkApi);

const addACar = createAsyncThunk('cars/addACar', async (car, thunkAPI) => {
  console.log('step 1')
  const url = `http://localhost:3000/api/v1/cars`;
  try {
    console.log('step 2')
    const response = await axios.post(url, car);
    console.log("la reponse est ${response}")
    return response.data;
  } catch (error) {
    console.log('step 4')
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export { fetchCars, addACar };
