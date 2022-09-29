import React, { useState } from "react";
import { useEffect } from "react";

import { Button } from "../../components/Button";
import { Filter } from "../../components/Filter";
import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import { TicketsTableColumn, TicketsTableInfo } from "./constants";
import { SortedBy } from "./constants";
import {
  TableVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const Tickets = () => {
  const [sort, setSort] = useState(SortedBy[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container tickets">
        <div className="tickets-tools">
          <Button text="Add ticket" />
          <div className="export">
            <Text
              className="cursor-pointer"
              variant={TextVariants.subtitle_medium}
            >
              Show unread
            </Text>

            <Filter
              isShowSelect={true}
              options={SortedBy}
              selectValue={sort}
              setSelectValue={setSort}
              isShowButton={true}
              leftSide={<i className="fas fa-search"></i>}
              placeholder={"Search tickets"}
            />
          </div>
        </div>
        <Table
          variant={TableVariants.Tickets}
          data={TicketsTableInfo}
          columnNames={TicketsTableColumn}
        />
      </div>
    </>
  );
};

export default Tickets;
