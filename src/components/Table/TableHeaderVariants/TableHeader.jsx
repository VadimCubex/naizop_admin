import React from "react";

import HeaderOrders from "./HeaderOrders";
import HeaderService from "./HeaderService";
import HeaderUsers from "./HeaderUsers";
import { TableVariants } from "../../../constants/VariantsOfComponents";

const TableHeader = ({ variant, columns }) => {
  const HeaderVariantMap = {
    [TableVariants.Users]: <HeaderUsers column={columns} />,
    [TableVariants.Services]: <HeaderService column={columns} />,
    [TableVariants.Orders]: <HeaderOrders column={columns} />,
  };

  return <>{HeaderVariantMap[variant]}</>;
};

export default TableHeader;
