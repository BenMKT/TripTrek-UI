import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, addACar, removeACar } from '../../utils/fetchApi';
import { useDispatch } from 'react-redux';

const name = 'cars';

const initialState = {
  cars: [],
  isLoading: false,
  error: '',
  message: '',
};

const carsSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addACar.pending, (state) => {
        state.isLoading = true;
        state.error = '';
        state.message = '';
      })
      .addCase(addACar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.message = 'Car added ✔️';
        state.cars.push(action.payload);
      })
      .addCase(addACar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.message = '';
      })
      .addCase(removeACar.pending, (state) => {
        state.isLoading = true;
        state.error = '';
        state.message = '';
      })
      .addCase(removeACar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = state.cars.filter((car) => car.id !== action.payload);
        state.message = 'Car deleted ✔️'
        state.error = ''
      })
      .addCase(removeACar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.message = '';
      })
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.message = '';
        state.error = ''
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        const cars = action.payload;
        state.cars = cars;
        state.error = ''
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default carsSlice.reducer;
export const arrCars = (state) => state.cars.cars;
