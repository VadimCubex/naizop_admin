import TableSlice from "./Tables/TableSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  tables: TableSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
