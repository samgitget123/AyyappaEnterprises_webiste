import { configureStore } from '@reduxjs/toolkit';
import siteContentReducer from '../features/siteContent/siteContentSlice.jsx';

export const store = configureStore({
  reducer: {
    siteContent: siteContentReducer,
  },
});
