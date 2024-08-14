import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('fetchUser', async () => {
	const response = await fetch('https://api.jsonbin.io/v3/b/66a878a5e41b4d34e4190c12');
	const data = await response.json();
  return data;
});

const userSlice = createSlice({
	name: 'user',
	initialState: {
		isLoading: false,
		data: {},
		error: false,
	},
	extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });
  } })

export default userSlice.reducer;
