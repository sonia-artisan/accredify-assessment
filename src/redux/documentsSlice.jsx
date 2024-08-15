import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDocuments = createAsyncThunk('fetchDocuments', async () => {
	const response = await fetch('https://api.jsonbin.io/v3/b/66a87a90ad19ca34f88ecd65');
	const data = await response.json();
  return data;
});

const documentsSlice = createSlice({
	name: 'documents',
	initialState: {
		isLoading: false,
		data: {},
		error: false,
	},
	extraReducers: (builder) => {
    builder.addCase(fetchDocuments.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDocuments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchDocuments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });
  } })

export default documentsSlice.reducer;
