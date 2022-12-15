import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./products";
import ErrorsReducer from "./errors";
import AuthReducer from "./auth";

const store = configureStore({
  reducer: {
    products: ProductsReducer,
    errors: ErrorsReducer,
    auth: AuthReducer,
  },
});

export default store;
