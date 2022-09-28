import React from "react";

import RowOrders from "./RowOrders";
import RowServiceCategory from "./RowServiceCategory";
import RowUsers from "./RowUsers";
import { TableVariants } from "../../../constants/VariantsOfComponents";

const TableRow = ({ variant, item }) => {
  const RowVariantMap = {
    [TableVariants.Users]: <RowUsers item={item} />,
    [TableVariants.Services]: <RowServiceCategory item={item} />,
    [TableVariants.Orders]: <RowOrders item={item} />,
  };

  return <>{RowVariantMap[variant]}</>;
};

export default TableRow;
