import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { createReservation } from '../../utils/fetchApi';

export const initialState = {
  reservations: [],
  isLoading: false,
  error: '',
  message: '',
};

export const getReservations = createAsyncThunk('reservations/getReservations', async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/cars/1/reservations');
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
});

export const reservationsSlice = createSlice({
  name: 'DateTime',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReservations.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getReservations.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        reservations: action.payload,
      }))
      .addCase(getReservations.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }))
      .addCase(createReservation.pending, (state) => {
        state.isLoading = true;
        state.error = '';
        state.message = '';
      })
      .addCase(createReservation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.message = 'Reservation created ✔️';
        state.reservations.push(action.payload);
      })
      .addCase(createReservation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.message = '';
      });
  },
});

export default reservationsSlice.reducer;
