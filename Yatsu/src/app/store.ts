import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { diceSlice } from '../features/dice/diceSlice';

export const store = configureStore({
  reducer: {
    dice: diceSlice.reducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
//Creates a reuseable generic type for creating thunks
//Remove comment once thunks make sense
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
