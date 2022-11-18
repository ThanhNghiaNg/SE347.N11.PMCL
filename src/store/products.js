const { createSlice } = require("@reduxjs/toolkit");
const initProductsState = {
  allProducts: [],
};

const productSlice = createSlice({
  name: "products",
  initialState: initProductsState,
  reducers: {
    setAllProducts: (state, actions) => {     
      state.allProducts = [...actions.payload];
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
