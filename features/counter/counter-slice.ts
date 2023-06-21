// Ducks pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state) {
      // it's okay to do this becauser immer make it immutable
      // under the hood
      state.value++;
    },
    // decrement
    // reset
  },
});

export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;



