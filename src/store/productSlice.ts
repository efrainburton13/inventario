import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductStock {
  supplierId: number;
  supplierName: string | null;
  stock: number;
  price: number;
}

interface Product {
  productId: number;
  name: string;
  description: string;
  productStocks: ProductStock[];
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
