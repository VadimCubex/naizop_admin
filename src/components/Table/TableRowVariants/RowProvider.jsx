import React from "react";

import { TextVariants } from "../../../constants/VariantsOfComponents";
import { Button } from "../../Button";
import { Text } from "../../Text";

const RowProvider = ({ item }) => {
  return (
    <div className="table-row-content">
      <div className="table-row-cell-1">
        <Text variant={TextVariants.subtitle_medium}>{item.provider}</Text>
      </div>
      <div className="table-row-cell-2">
        <Text variant={TextVariants.subtitle_medium}>{item.balance}</Text>
      </div>
      <div className="table-row-cell-3">
        <Button text="Edit" />
      </div>
    </div>
  );
};

export default RowProvider;
