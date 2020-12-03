import { configureStore, createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'user/auth',
  initialState: {
    id: -1,
    email: '',
  },
  reducers: {
    editUser: (state, action) => {
      // axios
      return {
        id: 1,
        email: 'test@gmail.com',
      }
    },
  }
})

export const {
  editUser
} = auth.actions;

export default auth;