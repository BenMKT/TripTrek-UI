import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCars = createAsyncThunk('cars/fetchCars',
  async (thunkApi) => thunkApi);

export { fetchCars };
