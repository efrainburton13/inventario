import { configureStore } from "@reduxjs/toolkit";

import productFavoriteReducer from "./productFavoriteSlice";
import productsReducer from "./productSlice";

const store = configureStore({
  reducer: {
    productFavorite: productFavoriteReducer,
    products: productsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;