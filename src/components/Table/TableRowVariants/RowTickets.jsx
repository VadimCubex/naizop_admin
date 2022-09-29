import React from "react";
import { useState } from "react";
import classNames from "classnames";

import { TextVariants } from "../../../constants/VariantsOfComponents";
import { Checkbox } from "../../Checkbox";
import { Text } from "../../Text";

const RowTickets = ({ item }) => {
  const [checked, setChecked] = useState(item.checked);

  return (
    <div className={classNames("table-row-content")}>
      <div className="table-row-cell-1">
        <Checkbox onChange={() => setChecked(!checked)} value={checked} />
      </div>
      <div className="table-row-cell-2">
        <Text variant={TextVariants.subtitle_medium}>{item.id}</Text>
      </div>
      <div className="table-row-cell-3">
        <Text variant={TextVariants.subtitle_medium}>{item.username}</Text>
      </div>
      <div className="table-row-cell-4">
        <Text variant={TextVariants.subtitle_medium}>{item.subject}</Text>
      </div>
      <div className="table-row-cell-5">
        <Text variant={TextVariants.subtitle_medium}>{item.status}</Text>
      </div>
      <div className="table-row-cell-6">
        <Text variant={TextVariants.subtitle_medium}>{item.created}</Text>
      </div>
      <div className="table-row-cell-7">
        <Text variant={TextVariants.subtitle_medium}>{item.lastUpdated}</Text>
      </div>
    </div>
  );
};

export default RowTickets;
