import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './slices/main';
import authReducer from './slices/auth';

export const store = configureStore({
  reducer: {
    main: mainReducer,
    auth: authReducer,
  },
});
