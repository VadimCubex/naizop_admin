import React from "react";

import HeaderOrders from "./HeaderOrders";
import HeaderPayments from "./HeaderPayments";
import HeaderProvider from "./HeaderProvider";
import HeaderService from "./HeaderService";
import HeaderTickets from "./HeaderTickets";
import HeaderUsers from "./HeaderUsers";
import { TableVariants } from "../../../constants/VariantsOfComponents";

const TableHeader = ({ variant, columns }) => {
  const HeaderVariantMap = {
    [TableVariants.Users]: <HeaderUsers column={columns} />,
    [TableVariants.Services]: <HeaderService column={columns} />,
    [TableVariants.Orders]: <HeaderOrders column={columns} />,
    [TableVariants.Payments]: <HeaderPayments column={columns} />,
    [TableVariants.Tickets]: <HeaderTickets column={columns} />,
    [TableVariants.Provider]: <HeaderProvider column={columns} />,
  };

  return <>{HeaderVariantMap[variant]}</>;
};

export default TableHeader;
