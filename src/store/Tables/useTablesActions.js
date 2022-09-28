import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { SetUserActiveAction } from "./UsersTable/UsersTableSlice";

import { SetActiveAction } from "./ServiceTable/ServiceTableSlice";

export const useTablesActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      SetActiveAction,
      SetUserActiveAction,
    },
    dispatch
  );
};
