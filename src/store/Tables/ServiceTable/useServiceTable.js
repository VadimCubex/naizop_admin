import { useSelector } from "react-redux";

export const useServiceTableSelector = () =>
  useSelector((state) => state.tables.service);
