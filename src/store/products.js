const { createSlice } = require("@reduxjs/toolkit");
const initProductsState = {
  currentProducts: [],
  allProducts: [],
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
      console.log(actions.payload);
      state.currentProducts = [...actions.payload];
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
