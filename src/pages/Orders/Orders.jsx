import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classNames from "classnames";

import { Filter } from "../../components/Filter";
import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import { OrdersColumns, OrdersInfo, OrdersSort } from "./constants";
import {
  TableVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

import { SortedBy } from "../Services/constants";

const Orders = () => {
  const [activeSort, setActiveSort] = useState(OrdersSort[0]);
  const [sort, setSort] = useState(SortedBy[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container orders">
        <div className="orders-tools">
          <div className="sort">
            {OrdersSort.map((text, index) => (
              <div
                onClick={() => setActiveSort(text)}
                className={classNames("sort-item", {
                  active: activeSort === text,
                })}
                key={index}
              >
                <Text variant={TextVariants.subtitle_medium}>{text}</Text>
              </div>
            ))}
          </div>
          <div className="export">
            <Text
              variant={TextVariants.subtitle_medium}
              className="cursor-pointer"
            >
              Export
            </Text>
            <Filter
              isShowSelect={true}
              options={SortedBy}
              selectValue={sort}
              setSelectValue={setSort}
              leftSide={<i className="fas fa-search"></i>}
              placeholder={"Search"}
            />
          </div>
        </div>
        <Table
          variant={TableVariants.Orders}
          columnNames={OrdersColumns}
          data={OrdersInfo}
        />
      </div>
    </>
  );
};

export default Orders;
