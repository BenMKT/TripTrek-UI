import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, addACar } from '../../utils/fetchApi';

const name = 'cars';
const initialState = {
  cars: [],
  isLoading: false,
  error: '',
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
        const cars = state.cars
        cars.push(action.payload)
        [state.cars] = cars;
      })
      .addCase(addACar.rejected, (state, action) => {
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
