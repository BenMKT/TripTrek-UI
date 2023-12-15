import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../constants';

export const signupUser = createAsyncThunk('user/signupUser', async (user, { rejectWithValue }) => {
  try {
    const response = await axios.post(BASE_URL+'users', user);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.error);
  }
});

export const loginUser = createAsyncThunk('user/loginUser', async (username) => {
  const response = await axios.post(BASE_URL+'/users/sign_in', {
    user: {
      username,
    },
  });
  return response;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    auth: {
      token: null, // Include the authentication token here
    },
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.auth.token = null; // Clear the token on logout
      state.user = '';
    },
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
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.auth.token = action.payload.headers.authorization;// Store the token in the auth field
        state.user = action.payload.data;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
