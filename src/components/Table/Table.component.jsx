import React from "react";
import classNames from "classnames";

import TableHeader from "./TableHeaderVariants/TableHeader";
import TableRow from "./TableRowVariants/TableRow";
import {
  TableVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { Text } from "../Text";

export const TableComponent = ({ data, columnNames, variant, className }) => {
  const TableClass = classNames(
    "table",
    {
      [`table-variant-${variant}`]: variant,
    },
    className
  );

  const TableContainerClass = classNames("table-container", {
    [`table-services`]: variant === TableVariants.Services,
  });

  return (
    <>
      <div className={TableContainerClass}>
        <div className={TableClass}>
          <div className="table-header">
            <TableHeader variant={variant} columns={columnNames} />
          </div>
          <div className="table-content">
            {data.map((item, index) => (
              <div className="table-row" key={index}>
                <TableRow key={index} variant={variant} item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {variant !== TableVariants.Services &&
        variant !== TableVariants.Provider && (
          <div className="table-item-length">
            <Text variant={TextVariants.subtitle_medium}>
              1 to {data.length} of {data.length}
            </Text>
          </div>
        )}
    </>
  );
};

TableComponent.displayName = "Table";
