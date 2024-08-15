import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'userType',
  initialState: 'managedUser',
  reducers: {
    toggleUserType: (state) => {
      return state === 'managedUser' ? 'personalUser' : 'managedUser';
    }
  }
});

export const { toggleUserType } = toggleSlice.actions;
export default toggleSlice.reducer;
