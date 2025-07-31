import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface productFavorite {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const initialState: productFavorite[] = [];

const productFavoriteSlice = createSlice({
  name: "productFavorite",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<productFavorite>) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = productFavoriteSlice.actions;
export default productFavoriteSlice.reducer;
