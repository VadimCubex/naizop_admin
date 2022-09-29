import React from "react";

import RowOrders from "./RowOrders";
import RowPayments from "./RowPayments";
import RowServiceCategory from "./RowServiceCategory";
import RowTickets from "./RowTickets";
import RowUsers from "./RowUsers";
import { TableVariants } from "../../../constants/VariantsOfComponents";

const TableRow = ({ variant, item }) => {
  const RowVariantMap = {
    [TableVariants.Users]: <RowUsers item={item} />,
    [TableVariants.Services]: <RowServiceCategory item={item} />,
    [TableVariants.Orders]: <RowOrders item={item} />,
    [TableVariants.Payments]: <RowPayments item={item} />,
    [TableVariants.Tickets]: <RowTickets item={item} />,
  };

  return <>{RowVariantMap[variant]}</>;
};

export default TableRow;
