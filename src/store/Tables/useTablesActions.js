import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { setActiveAction, setActiveColumn } from "./TableSlice";

export const useTablesActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      setActiveAction,
      setActiveColumn,
    },
    dispatch
  );
};
