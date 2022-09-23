import React, { useState } from "react";
import { useEffect } from "react";

import { Button } from "../../components/Button";
import { Filter } from "../../components/Filter";
import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import { ServiceColumns, ServiceInfo, SortedBy } from "./constants";
import {
  TableVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const Services = () => {
  const [sort, setSort] = useState(SortedBy[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container services">
        <div className="services-tools">
          <div className="buttons">
            <Button text="Add service" />
            <Button text="Add category" />
          </div>
          <div className="import">
            <Text
              className="cursor-pointer"
              variant={TextVariants.subtitle_medium}
            >
              Import
            </Text>
            <Filter
              isShowSelect={true}
              options={SortedBy}
              selectValue={sort}
              setSelectValue={setSort}
              isShowButton={false}
              leftSide={<i className="fas fa-search"></i>}
              placeholder={"Search"}
            />
          </div>
        </div>
        <Table
          variant={TableVariants.Services}
          data={ServiceInfo}
          columnNames={ServiceColumns}
        />
      </div>
    </>
  );
};

export default Services;
