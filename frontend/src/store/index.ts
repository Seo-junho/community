import authReducer from './auth';
import { combineReducers, configureStore } from '@reduxjs/toolkit';


const reducers = combineReducers({
  auth: authReducer,
})

const rootStore = configureStore({ reducer: reducers });

export type AppDispatch = typeof rootStore.dispatch
export default rootStore;