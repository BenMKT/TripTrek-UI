import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signupUser = createAsyncThunk('user/signupUser', async (user, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:3000/users', user);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.error);
  }
});



const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.data;
        state.error = action.payload.message;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = 'failed';
        action.error.message = 'This username already exists, kindly choose another one.';
        state.error = action.error.message;
      })
  },
});

export default userSlice.reducer;