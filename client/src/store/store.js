import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./products";
import ErrorsReducer from "./errors";
import AuthReducer from "./auth";
import UserNavigationBar from "./UserNavigationBar";
import PopupReducer from './popup'

const store = configureStore({
  reducer: {
    products: ProductsReducer,
    errors: ErrorsReducer,
    auth: AuthReducer,
    navigation: UserNavigationBar,
    popup: PopupReducer,
  },
});

export default store;
