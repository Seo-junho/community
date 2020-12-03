import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserInfo {
  id: number,
  email: string,
}
const auth = createSlice({
  name: 'auth',
  initialState: {
    id: -1,
    email: '',
  },
  reducers: {
    editAuthUser: (state, action: PayloadAction<UserInfo>) => {
      // axios
      console.log('state', state)
      console.log('action', action)
      return action.payload;
    },
  }
})

// const authStore = configureStore({ reducer: auth.reducer });
export const {
  editAuthUser
} = auth.actions;

export default auth.reducer;