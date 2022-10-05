import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import classNames from "classnames";

import { Button } from "../../components/Button";
import { DatePicker } from "../../components/DatePicker";
import { DropDown } from "../../components/DropDown";
import { Filter } from "../../components/Filter";
import { SvgIcon } from "../../components/SvgIcon";
import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import {
  OrdersColumns,
  OrdersInfo,
  OrdersSearch,
  OrdersSearchDate,
  OrdersSort,
} from "./constants";
import {
  IconsVariants,
  TableVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { PrintDate } from "../../helpers/helpers";

const Orders = () => {
  const [activeSort, setActiveSort] = useState(OrdersSort[0]);
  const [search, setSearch] = useState(OrdersSearch[0]);
  const [date, setDate] = useState(OrdersSearchDate[0]);
  const [isShowDate, setIsShowDate] = useState(false);
  const [isShowDatePicker, setIsShowDatePicker] = useState(false);

  const today = useRef(new Date());
  const [startDate, setStartDate] = useState(
    new Date(Date.parse(today.current) - 604800017)
  );
  const [endDate, setEndDate] = useState(today.current);

  const onChangeDatePicker = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleClick = () => {
    setIsShowDate(!isShowDate);
    setIsShowDatePicker(false);
  };

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
            <div>
              <Text
                variant={TextVariants.subtitle_medium}
                className="cursor-pointer"
              >
                Export
              </Text>
              <div
                className="button date"
                onClick={handleClick}
                icon={IconsVariants.DropDown_arrow_fill}
              >
                <div>
                  <Text variant={TextVariants.subtitle_medium}>{date}</Text>
                  <SvgIcon
                    src={IconsVariants.DropDown_arrow_fill}
                    size={14}
                    color={"#000000"}
                  />
                </div>
                <DropDown className="dropDown-dates" isOpen={isShowDate}>
                  <div className="date-item gray">
                    <Text variant={TextVariants.subtitle_medium}>
                      Show orders for
                    </Text>
                  </div>
                  {OrdersSearchDate.map((item, index) => (
                    <div
                      className="date-item"
                      key={index}
                      onClick={() => setDate(item)}
                    >
                      <Text variant={TextVariants.subtitle_medium}>{item}</Text>
                    </div>
                  ))}
                  <div
                    className="date-item"
                    onClick={(e) => {
                      setIsShowDatePicker(true);
                      e.stopPropagation();
                    }}
                  >
                    <Text variant={TextVariants.subtitle_medium}>
                      Custom ramge
                    </Text>
                  </div>
                </DropDown>
                <DropDown className="dropDown-picker" isOpen={isShowDatePicker}>
                  <div onClick={(e) => e.stopPropagation()}>
                    <DatePicker
                      startDate={startDate}
                      endDate={endDate}
                      onChange={onChangeDatePicker}
                    />
                  </div>
                  <div className="separator" />
                  <div className="buttons">
                    <Text variant={TextVariants.subtitle_bold}>{`${
                      startDate ? PrintDate(startDate) : "Select start date"
                    } – ${
                      endDate ? PrintDate(endDate) : "Select end date"
                    }`}</Text>
                    <Button
                      text="Cancel"
                      onClick={(e) => {
                        setIsShowDatePicker(false);
                        e.stopPropagation();
                      }}
                    />
                    <Button className="blue" text="Apply" />
                  </div>
                </DropDown>
              </div>
            </div>

            <Filter
              isShowSelect={true}
              options={OrdersSearch}
              selectValue={search}
              setSelectValue={setSearch}
              leftSide={<i className="fas fa-search"></i>}
              placeholder={"Search orders"}
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
