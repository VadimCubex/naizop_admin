import React, { useState } from "react";
import { useEffect } from "react";

import { Button } from "../../components/Button";
import { Filter } from "../../components/Filter";
import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import { PaymentColumn, PaymentInfo, PaymentSearch } from "./constants";
import {
  TableVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const Payment = () => {
  const [search, setSearch] = useState(PaymentSearch[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container payment">
        <div className="payment-tools">
          <Button text="Add payment" />
          <div className="export">
            <Text
              className="cursor-pointer"
              variant={TextVariants.subtitle_medium}
            >
              Export
            </Text>
            <Filter
              isShowSelect={true}
              options={PaymentSearch}
              selectValue={search}
              setSelectValue={setSearch}
              leftSide={<i className="fas fa-search"></i>}
              placeholder={"Search payments"}
            />
          </div>
        </div>
        <Table
          variant={TableVariants.Payments}
          data={PaymentInfo}
          columnNames={PaymentColumn}
        />
      </div>
    </>
  );
};

export default Payment;
