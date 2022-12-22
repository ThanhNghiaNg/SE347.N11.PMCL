const { createSlice } = require("@reduxjs/toolkit");
const initProductsState = {
  currentProducts: [],
  allProducts: [],
  numberProductCart: 0,
  quantityProductCart: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState: initProductsState,
  reducers: {
    setAllProducts: (state, actions) => {
      state.allProducts = [...actions.payload];
      state.currentProducts = [...actions.payload];
    },
    resetCurrentProducts: (state) => {
      state.currentProducts = [...state.allProducts];
    },
    setCurrentProducts: (state, actions) => {
      state.currentProducts = [...actions.payload];
    },
    setNumberProductCart: (state, actions) => {
      state.numberProductCart = actions.payload;
    },
    descreaseNumberProductCart: (state, actions) => {
      state.numberProductCart -= 1;
    },
    setQuantityProductCart: (state, actions) => {
      state.quantityProductCart = actions.payload;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
