import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPersonalUser = createAsyncThunk('fetchPersonalUser', async () => {
	const response = await fetch('https://api.jsonbin.io/v3/b/66b1b31cad19ca34f892124a');
	const data = await response.json();
  return data;
});

const personalUserSlice = createSlice({
	name: 'personalUser',
	initialState: {
		isLoading: false,
		data: {},
		error: false,
	},
	extraReducers: (builder) => {
    builder.addCase(fetchPersonalUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPersonalUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPersonalUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });
  } })

export default personalUserSlice.reducer;
