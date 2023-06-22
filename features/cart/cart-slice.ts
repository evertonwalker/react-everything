import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  value: Array<CartItem>;
}

interface CartItem {
  id: number;
  number: Array<number>;
}

const initialState: CartState = {
  value: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOrRemoveFromCart(state, action: PayloadAction<CartItem>) {
      if (state.value.find((cartItem) => action.payload.id === cartItem.id)) {
        state.value = [
          ...state.value.filter(
            (cartItem) => cartItem.id !== action.payload.id
          ),
        ];
      } else {
        state.value.push(action.payload);
      }

    },
  },
});

export const { addOrRemoveFromCart } = cartSlice.actions;
export default cartSlice.reducer;
