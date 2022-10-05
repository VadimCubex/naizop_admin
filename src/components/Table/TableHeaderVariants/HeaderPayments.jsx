import React, { useState } from "react";
import classNames from "classnames";

import {
  IconsVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { Button } from "../../Button";
import { DropDown } from "../../DropDown";
import { Text } from "../../Text";
import {
  PaymentFraudRisk,
  PaymentMethod,
  PaymentMode,
  PaymentStatus,
  UsersStatuses,
} from "../constants";

import { useTableSelector } from "../../../store/Tables/useTable";
import { useTablesActions } from "../../../store/Tables/useTablesActions";

const HeaderPayments = ({ column }) => {
  const { activeColumn } = useTableSelector();
  const { setActiveColumn } = useTablesActions();
  const [selectedMethod, setSelectedMethod] = useState(UsersStatuses[0]);
  const [selectedStatus, setSelectedStatus] = useState(UsersStatuses[0]);
  const [selectedRisk, setSelectedRisk] = useState(UsersStatuses[0]);
  const [selectedMode, setSelectedMode] = useState(UsersStatuses[0]);

  const handleClickMethod = (e, text) => {
    setActiveColumn("");
    setSelectedMethod(text);
    e.stopPropagation();
  };

  const handleClickStatus = (e, text) => {
    setActiveColumn("");
    setSelectedStatus(text);
    e.stopPropagation();
  };

  const handleClickRisk = (e, text) => {
    setActiveColumn("");
    setSelectedRisk(text);
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
        <Text variant={TextVariants.subtitle_bold}>{column.id}</Text>
      </div>
      <div className="table-column-cell-2">
        <Text variant={TextVariants.subtitle_bold}>{column.user}</Text>
      </div>
      <div className="table-column-cell-3">
        <Text variant={TextVariants.subtitle_bold}>{column.balance}</Text>
      </div>
      <div className="table-column-cell-4">
        <Text variant={TextVariants.subtitle_bold}>{column.amount}</Text>
      </div>
      <div className="table-column-cell-5">
        <Button
          className={classNames({ active: activeColumn === "Method" })}
          onClick={() => setActiveColumn("Method")}
          text={selectedMethod === "All" ? column.method : selectedMethod}
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={activeColumn === "Method"}>
            {PaymentMethod.map((text, index) => (
              <div
                key={index}
                onClick={(e) => handleClickMethod(e, text)}
                className="action-item cursor-pointer"
              >
                <Text variant={TextVariants.subtitle_medium}>{text}</Text>
              </div>
            ))}
          </DropDown>
        </Button>
      </div>
      <div className="table-column-cell-6">
        <Button
          className={classNames({ active: activeColumn === "Status" })}
          onClick={() => setActiveColumn("Status")}
          text={selectedStatus === "All" ? column.status : selectedStatus}
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={activeColumn === "Status"}>
            {PaymentStatus.map((text, index) => (
              <div
                key={index}
                onClick={(e) => handleClickStatus(e, text)}
                className="action-item cursor-pointer"
              >
                <Text variant={TextVariants.subtitle_medium}>{text}</Text>
              </div>
            ))}
          </DropDown>
        </Button>
      </div>
      <div className="table-column-cell-7">
        <Button
          className={classNames({ active: activeColumn === "FraudRisk" })}
          onClick={() => setActiveColumn("FraudRisk")}
          text={selectedRisk === "All" ? column.fraudRisk : selectedRisk}
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={activeColumn === "FraudRisk"}>
            {PaymentFraudRisk.map((text, index) => (
              <div
                key={index}
                onClick={(e) => handleClickRisk(e, text)}
                className="action-item cursor-pointer"
              >
                <Text variant={TextVariants.subtitle_medium}>{text}</Text>
              </div>
            ))}
          </DropDown>
        </Button>
      </div>
      <div className="table-column-cell-8">
        <Text variant={TextVariants.subtitle_bold}>{column.memo}</Text>
      </div>
      <div className="table-column-cell-9">
        <Text variant={TextVariants.subtitle_bold}>{column.created}</Text>
      </div>
      <div className="table-column-cell-10">
        <Text variant={TextVariants.subtitle_bold}>{column.updated}</Text>
      </div>
      <div className="table-column-cell-11">
        <Button
          className={classNames({ active: activeColumn === "Mode" })}
          onClick={() => setActiveColumn("Mode")}
          text={selectedMode === "All" ? column.mode : selectedMode}
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={activeColumn === "Mode"}>
            {PaymentMode.map((text, index) => (
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
      <div className="table-column-cell-12"></div>
    </>
  );
};

export default HeaderPayments;
