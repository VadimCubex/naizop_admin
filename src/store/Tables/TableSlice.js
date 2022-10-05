import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeAction: "",
  activeColumn: "",
};

const TableSlice = createSlice({
  name: "Table",
  initialState,
  reducers: {
    setActiveAction(state, { payload }) {
      if (state.activeAction !== payload) {
        state.activeAction = payload;
      } else {
        state.activeAction = "";
      }
    },
    setActiveColumn(state, { payload }) {
      if (state.activeColumn !== payload) {
        state.activeColumn = payload;
      } else {
        state.activeColumn = "";
      }
    },
  },
});

export const { setActiveAction, setActiveColumn } = TableSlice.actions;

export default TableSlice.reducer;
