const { createSlice } = require("@reduxjs/toolkit");
const initSelectedState = {
  selectedNav: "userInformation",
};

const navigationSlice = createSlice({
  name: "navigations",
  initialState: initSelectedState,
  reducers: {
    setSelectedNav: (state, actions) => {
      state.selectedNav = actions.payload;
    },
  },
});

export const navigationActions = navigationSlice.actions;

export default navigationSlice.reducer;
