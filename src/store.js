import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    users: usersReducer
  }
});

export default store;
