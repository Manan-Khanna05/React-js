import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    addition: (state, action) => {
      state.counter += action.payload;
    },
    subtract: (state, action) => {
      state.counter -= action.payload;
    },
  },
});

export const { increment, decrement, addition, subtract } =
  counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});
