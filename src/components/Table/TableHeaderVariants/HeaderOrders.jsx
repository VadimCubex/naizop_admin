import React, { useState } from "react";
import classNames from "classnames";

import {
  IconsVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { Button } from "../../Button";
import { Checkbox } from "../../Checkbox";
import { DropDown } from "../../DropDown";
import { Text } from "../../Text";
import { UsersStatuses } from "../constants";

const HeaderOrders = ({ column }) => {
  const [checked, setChecked] = useState(column.checked);
  const [isOpenUser, setIsOpenUser] = useState(false);
  const [isOpenService, setIsOpenService] = useState(false);
  const [isOpenMode, setIsOpenMode] = useState(false);

  const [selectedUser, setSelectedUser] = useState(UsersStatuses[0]);
  const [selectedService, setSelectedService] = useState(UsersStatuses[0]);
  const [selectedMode, setSelectedMode] = useState(UsersStatuses[0]);

  const handleClickUser = (text) => {
    setIsOpenUser(false);
    setSelectedUser(text);
  };

  const handleClickService = (text) => {
    setIsOpenService(false);
    setSelectedService(text);
  };

  const handleClickMode = (text) => {
    setIsOpenMode(false);
    setSelectedMode(text);
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
          className={classNames({ active: isOpenUser })}
          onClick={() => setIsOpenUser(!isOpenUser)}
          text={selectedUser === "All" ? column.user : selectedUser}
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={isOpenUser}>
            {UsersStatuses.map((text, index) => (
              <div
                key={index}
                onClick={() => handleClickUser(text)}
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
          className={classNames({ active: isOpenService })}
          onClick={() => setIsOpenService(!isOpenService)}
          text={selectedService === "All" ? column.service : selectedService}
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={isOpenService}>
            {UsersStatuses.map((text, index) => (
              <div
                key={index}
                onClick={() => handleClickService(text)}
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
      <div className="table-column-cell-13"></div>
    </>
  );
};

export default HeaderOrders;
