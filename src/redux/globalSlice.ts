import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ThemeVariant} from '../types';

const initialState = {
  theme: 'light' as ThemeVariant,
};

export type GlobalState = typeof initialState;

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeVariant>) => {
      state.theme = action.payload;
    },
  },
});

export const {setTheme} = globalSlice.actions;

export default globalSlice.reducer;
