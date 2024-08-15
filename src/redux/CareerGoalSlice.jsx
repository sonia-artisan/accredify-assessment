import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCareerGoal = createAsyncThunk('fetchCareerGoal', async () => {
	const response = await fetch('https://api.jsonbin.io/v3/b/66a87a3ae41b4d34e4190ccc');
	const data = await response.json();
  return data;
});

const careerGoalSlice = createSlice({
	name: 'user',
	initialState: {
		isLoading: false,
		data: {},
		error: false,
	},
	extraReducers: (builder) => {
    builder.addCase(fetchCareerGoal.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCareerGoal.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCareerGoal.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });
  } })

export default careerGoalSlice.reducer;
