import React from "react";

import HeaderService from "./HeaderService";
import HeaderUsers from "./HeaderUsers";
import { TableVariants } from "../../../constants/VariantsOfComponents";

const TableHeader = ({ variant, columns }) => {
  const HeaderVariantMap = {
    [TableVariants.Users]: <HeaderUsers column={columns} />,
    [TableVariants.Services]: <HeaderService column={columns} />,
  };

  return <>{HeaderVariantMap[variant]}</>;
};

export default TableHeader;
