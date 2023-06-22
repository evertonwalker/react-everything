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
    decrement(state) {
      state.value--;
    },
    amountAdd(state, action: PayloadAction<number>){
      state.value += action.payload;
    }
    // decrement
    // reset
  },
});

export const { incremented, decrement, amountAdd } = counterSlice.actions;
export default counterSlice.reducer;



