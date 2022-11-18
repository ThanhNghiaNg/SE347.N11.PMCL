import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./products";

const store = configureStore({
  reducer: { products: ProductsReducer },
});

export default store;
