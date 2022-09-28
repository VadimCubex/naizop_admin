import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeAction: "",
};

const UsersTableSlice = createSlice({
  name: "usersTable",
  initialState,
  reducers: {
    SetUserActiveAction(state, { payload }) {
      if (state.activeAction !== payload) {
        state.activeAction = payload;
      } else {
        state.activeAction = "";
      }
    },
  },
});

export const { SetUserActiveAction } = UsersTableSlice.actions;

export default UsersTableSlice.reducer;
