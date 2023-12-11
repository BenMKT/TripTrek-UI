import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, addACar, removeACar } from '../../utils/fetchApi';

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
      })
      .addCase(addACar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = 'Car added';
        state.cars.push(action.payload);
      })
      .addCase(addACar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(removeACar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeACar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = state.cars.filter((car) => car.id !== action.payload);
      })
      .addCase(removeACar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        const cars = action.payload;
        [state.cars] = cars;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default carsSlice.reducer;
