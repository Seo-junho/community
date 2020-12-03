import auth from './auth';
import { configureStore } from '@reduxjs/toolkit';

const reducers = {
  ...auth.reducer,
}

const rootStore = configureStore({ reducer: reducers });

export default rootStore;