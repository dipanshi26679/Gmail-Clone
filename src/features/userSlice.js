import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    value: null,
    selectedMessage:null,
  },
   reducers: {
    signIn: (state,action) => {
      state.value=action.payload
    },
    signOut: (state) => {
      state.value=null
    },
  },
});      

export const { signIn, signOut } = userSlice.actions;

export const selectUser = (state) => state.user.value;


export default userSlice.reducer;
