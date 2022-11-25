import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./products";
import ErrorsReducer from "./errors";

const store = configureStore({
  reducer: { products: ProductsReducer, errors: ErrorsReducer },
});

export default store;
