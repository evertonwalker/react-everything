import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import cartReducer from "../features/cart/cart-slice";
import { dogApi } from "@/features/dogs/dogs-api-slice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { monsterReducer } from "@/features/monster/monster.reducer";
// import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    monster: monsterReducer
    // [dogApi.reducerPath]: dogApi.reducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dogApi.middleware),
});

// setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;