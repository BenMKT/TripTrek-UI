import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCars = createAsyncThunk('cars/fetchCars',
  async (thunkApi) => thunkApi);

const addACar = createAsyncThunk('cars/addACar', async (car, thunkAPI) => {
  const url = `http://localhost:3000/api/v1/cars`;
  try {
    //console.log(thunkAPI.getState())
    const { user } = thunkAPI.getState();
    console.log(user)
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.auth.token}`, 
    };
    console.log(user.auth.token.split('.').length)
    const response = await axios.post(url, car, { headers });
    return response.data;
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(`something went wrong: ${error.response.data}`);
  }
});

export { fetchCars, addACar };
