import React from "react";
import classNames from "classnames";

import { Accordion } from "../../Accordion";

const RowServiceCategory = ({ item }) => {
  return (
    <div
      className={classNames("table-row-content", { suspended: item.status })}
    >
      <Accordion category={item}>
        {item.services?.map((service, index) => (
          <div key={index}>{service.id}</div>
        ))}
      </Accordion>
    </div>
  );
};

export default RowServiceCategory;
