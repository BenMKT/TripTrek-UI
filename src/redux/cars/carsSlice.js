import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from '../../utils/fetchApi';

const name = 'cars';
const initialState = {
  cars: [],
  isLoading: true,
  error: '',
};

const carsSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
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
