import React from "react";
import classNames from "classnames";

import TableHeader from "./TableHeaderVariants/TableHeader";
import TableRow from "./TableRowVariants/TableRow";

export const TableComponent = ({ data, columnNames, variant, className }) => {
  const TableClass = classNames(
    "table",
    {
      [`table-variant-${variant}`]: variant,
    },
    className
  );

  return (
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
  );
};

TableComponent.displayName = "Table";
