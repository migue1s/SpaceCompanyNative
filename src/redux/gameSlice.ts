import {createSlice} from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {},
  reducers: {
    tick: (state) => state,
  },
});

export default gameSlice;
