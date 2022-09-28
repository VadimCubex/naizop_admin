import ServiceTableSlice from "./Tables/ServiceTable/ServiceTableSlice";
import UsersTableSlice from "./Tables/UsersTable/UsersTableSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  tables: combineReducers({
    service: ServiceTableSlice,
    users: UsersTableSlice,
  }),
});

export const store = configureStore({
  reducer: rootReducer,
});
