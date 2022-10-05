import React from "react";

import { TextVariants } from "../../../constants/VariantsOfComponents";
import { Text } from "../../Text";

const HeaderProvider = ({ column }) => {
  return (
    <>
      <div className="table-column-cell-1">
        <Text variant={TextVariants.subtitle_bold}>{column.provider}</Text>
      </div>
      <div className="table-column-cell-2">
        <Text variant={TextVariants.subtitle_bold}>{column.balance}</Text>
      </div>
      <div className="table-column-cell-3"></div>
    </>
  );
};

export default HeaderProvider;
