import React, { useState } from "react";
import classNames from "classnames";

import {
  IconsVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { Button } from "../../Button";
import { Checkbox } from "../../Checkbox";
import { DropDown } from "../../DropDown";
import { Filter } from "../../Filter";
import { Text } from "../../Text";
import {
  OrdersMode,
  OrdersService,
  OrdersUsers,
  UsersStatuses,
} from "../constants";

import { useTableSelector } from "../../../store/Tables/useTable";
import { useTablesActions } from "../../../store/Tables/useTablesActions";

const HeaderOrders = ({ column }) => {
  const [checked, setChecked] = useState(column.checked);
  const { activeColumn } = useTableSelector();
  const { setActiveColumn } = useTablesActions();

  const [selectedUser, setSelectedUser] = useState(UsersStatuses[0]);
  // eslint-disable-next-line no-unused-vars
  const [selectedService, setSelectedService] = useState(UsersStatuses[0]);
  const [selectedMode, setSelectedMode] = useState(UsersStatuses[0]);

  const handleClickUser = (e, text) => {
    setActiveColumn("");
    setSelectedUser(text);
    e.stopPropagation();
  };

  const handleClickService = (e, text) => {
    setActiveColumn("");
    setSelectedService(text);
    e.stopPropagation();
  };

  const handleClickMode = (e, text) => {
    setActiveColumn("");
    setSelectedMode(text);
    e.stopPropagation();
  };

  return (
    <>
      <div className="table-column-cell-1">
        <div className="checkbox-container">
          <Checkbox onChange={() => setChecked(!checked)} value={checked} />
        </div>
      </div>
      <div className="table-column-cell-2">
        <Text variant={TextVariants.subtitle_bold}>{column.id}</Text>
      </div>
      <div className="table-column-cell-3">
        <Button
          className={classNames({ active: activeColumn === "User" })}
          onClick={() => setActiveColumn("User")}
          text={selectedUser === "All" ? column.user : selectedUser}
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={activeColumn === "User"}>
            {OrdersUsers.map((text, index) => (
              <div
                key={index}
                onClick={(e) => handleClickUser(e, text)}
                className="action-item cursor-pointer"
              >
                <Text variant={TextVariants.subtitle_medium}>{text}</Text>
              </div>
            ))}
          </DropDown>
        </Button>
      </div>
      <div className="table-column-cell-4">
        <Text variant={TextVariants.subtitle_bold}>{column.charge}</Text>
      </div>
      <div className="table-column-cell-5">
        <Text variant={TextVariants.subtitle_bold}>{column.link}</Text>
      </div>
      <div className="table-column-cell-6">
        <Text variant={TextVariants.subtitle_bold}>{column.startCount}</Text>
      </div>
      <div className="table-column-cell-7">
        <Text variant={TextVariants.subtitle_bold}>{column.quantity}</Text>
      </div>
      <div className="table-column-cell-8">
        <Button
          className={classNames({ active: activeColumn === "Service" })}
          onClick={() => setActiveColumn("Service")}
          text={column.service}
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown
            maxHeight={340}
            className="service-dropDown"
            isOpen={activeColumn === "Service"}
          >
            <div onClick={(e) => e.stopPropagation()} className="search">
              <Filter
                leftSide={<i className="fas fa-search"></i>}
                placeholder={"Search"}
                isShowButton={false}
              />
              <Button
                iconUnicode={<i className="fas fa-sort-amount-down"></i>}
              />
            </div>
            {OrdersService.map((text, index) => (
              <div
                key={index}
                onClick={(e) => handleClickService(e, text)}
                className="action-item cursor-pointer"
              >
                <Text variant={TextVariants.subtitle_medium}>{text}</Text>
              </div>
            ))}
          </DropDown>
        </Button>
      </div>
      <div className="table-column-cell-9">
        <Text variant={TextVariants.subtitle_bold}>{column.status}</Text>
      </div>
      <div className="table-column-cell-10">
        <Text variant={TextVariants.subtitle_bold}>{column.remains}</Text>
      </div>
      <div className="table-column-cell-11">
        <Text variant={TextVariants.subtitle_bold}>{column.created}</Text>
      </div>
      <div className="table-column-cell-12">
        <Button
          className={classNames({ active: activeColumn === "Mode" })}
          onClick={() => setActiveColumn("Mode")}
          text={selectedMode === "All" ? column.mode : selectedMode}
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={activeColumn === "Mode"}>
            {OrdersMode.map((text, index) => (
              <div
                key={index}
                onClick={(e) => handleClickMode(e, text)}
                className="action-item cursor-pointer"
              >
                <Text variant={TextVariants.subtitle_medium}>{text}</Text>
              </div>
            ))}
          </DropDown>
        </Button>
      </div>
      <div className="table-column-cell-13"></div>
    </>
  );
};

export default HeaderOrders;
