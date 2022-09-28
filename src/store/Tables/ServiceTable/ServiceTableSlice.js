import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeAction: "",
};

const ServiceTableSlice = createSlice({
  name: "serviceTable",
  initialState,
  reducers: {
    SetActiveAction(state, { payload }) {
      if (state.activeAction !== payload) {
        state.activeAction = payload;
      } else {
        state.activeAction = "";
      }
    },
  },
});

export const { SetActiveAction } = ServiceTableSlice.actions;

export default ServiceTableSlice.reducer;
