import React from "react";

import RowService from "./RowService";
import { Accordion } from "../../Accordion";

const RowServiceCategory = ({ item }) => {
  return (
    <>
      <Accordion category={item}>
        {item.services?.map((service, index) => (
          <RowService key={index} item={service} />
        ))}
      </Accordion>
    </>
  );
};

export default RowServiceCategory;
