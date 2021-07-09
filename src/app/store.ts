import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import prices from '../features/prices/pricesSlice';

export const store = configureStore({
  reducer: {
    prices
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
