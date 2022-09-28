import { useSelector } from "react-redux";

export const useUsersTableSelector = () =>
  useSelector((state) => state.tables.users);
