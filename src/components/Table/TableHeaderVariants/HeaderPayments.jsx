import React, { useState } from "react";
import classNames from "classnames";

import {
  IconsVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { Button } from "../../Button";
import { DropDown } from "../../DropDown";
import { Text } from "../../Text";
import { UsersStatuses } from "../constants";

const HeaderPayments = ({ column }) => {
  const [isOpenMethod, setIsOpenMethod] = useState(false);
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [isOpenRisk, setIsOpenRisk] = useState(false);
  const [isOpenMode, setIsOpenMode] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(UsersStatuses[0]);
  const [selectedStatus, setSelectedStatus] = useState(UsersStatuses[0]);
  const [selectedRisk, setSelectedRisk] = useState(UsersStatuses[0]);
  const [selectedMode, setSelectedMode] = useState(UsersStatuses[0]);

  const handleClickMethod = (text) => {
    setSelectedMethod(text);
  };

  const handleClickStatus = (text) => {
    setSelectedStatus(text);
  };

  const handleClickRisk = (text) => {
    setSelectedRisk(text);
  };

  const handleClickMode = (text) => {
    setSelectedMode(text);
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
          className={classNames({ active: isOpenMethod })}
          onClick={() => setIsOpenMethod(!isOpenMethod)}
          text={selectedMethod === "All" ? column.method : selectedMethod}
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={isOpenMethod}>
            {UsersStatuses.map((text, index) => (
              <div
                key={index}
                onClick={() => handleClickMethod(text)}
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
          className={classNames({ active: isOpenStatus })}
          onClick={() => setIsOpenStatus(!isOpenStatus)}
          text={selectedStatus === "All" ? column.status : selectedStatus}
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={isOpenStatus}>
            {UsersStatuses.map((text, index) => (
              <div
                key={index}
                onClick={() => handleClickStatus(text)}
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
          className={classNames({ active: isOpenRisk })}
          onClick={() => setIsOpenRisk(!isOpenRisk)}
          text={selectedRisk === "All" ? column.fraudRisk : selectedRisk}
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={isOpenRisk}>
            {UsersStatuses.map((text, index) => (
              <div
                key={index}
                onClick={() => handleClickRisk(text)}
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
          className={classNames({ active: isOpenMode })}
          onClick={() => setIsOpenMode(!isOpenMode)}
          text={selectedMode === "All" ? column.mode : selectedMode}
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={isOpenMode}>
            {UsersStatuses.map((text, index) => (
              <div
                key={index}
                onClick={() => handleClickMode(text)}
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
