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
import {
  ServiceStatuses,
  ServiceProviders,
  ServiceTypes,
  UsersStatuses,
} from "../constants";

const HeaderService = ({ column }) => {
  const [checked, setChecked] = useState(column.checked);
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [isOpenType, setIsOpenType] = useState(false);
  const [isOpenProvider, setIsOpenProvider] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState(UsersStatuses[0]);
  const [selectedType, setSelectedType] = useState(UsersStatuses[0]);
  const [selectedProvider, setSelectedProvider] = useState([]);

  const handleClickStatus = (text) => {
    setIsOpenStatus(false);
    setSelectedStatus(text);
  };

  const handleClickType = (text) => {
    setIsOpenType(false);
    setSelectedType(text);
  };

  const handleClickProvider = (text) => {
    if (selectedProvider.includes(text)) {
      setSelectedProvider(selectedProvider.filter((item) => item !== text));
    } else {
      setIsOpenProvider(false);
      setSelectedProvider([...selectedProvider, text]);
    }
  };

  const ProviderTitle = () => {
    if (selectedProvider.length > 0) {
      return column.provider + `(${selectedProvider?.length})`;
    } else {
      return column.provider;
    }
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
        <Text variant={TextVariants.subtitle_bold}>{column.service}</Text>
      </div>
      <div className="table-column-cell-4">
        <Button
          className={classNames({ active: isOpenType })}
          onClick={() => setIsOpenType(!isOpenType)}
          text={selectedType === "All" ? column.type : selectedType}
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={isOpenType}>
            {ServiceTypes.map((text, index) => (
              <div
                key={index}
                onClick={() => handleClickType(text)}
                className="action-item cursor-pointer"
              >
                <Text variant={TextVariants.subtitle_medium}>{text}</Text>
              </div>
            ))}
          </DropDown>
        </Button>
      </div>
      <div className="table-column-cell-5">
        <Button
          className={classNames({ active: isOpenProvider })}
          onClick={() => setIsOpenProvider(!isOpenProvider)}
          text={ProviderTitle()}
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={isOpenProvider}>
            {ServiceProviders.map((text, index) => (
              <div
                key={index}
                onClick={() => handleClickProvider(text)}
                className="action-item cursor-pointer"
              >
                <Text variant={TextVariants.subtitle_medium}>{text}</Text>
              </div>
            ))}
          </DropDown>
        </Button>
      </div>
      <div className="table-column-cell-6">
        <Text variant={TextVariants.subtitle_bold}>{column.rate}</Text>
      </div>
      <div className="table-column-cell-7">
        <Text variant={TextVariants.subtitle_bold}>{column.min}</Text>
      </div>
      <div className="table-column-cell-8">
        <Text variant={TextVariants.subtitle_bold}>{column.max}</Text>
      </div>
      <div className="table-column-cell-9">
        <Button
          className={classNames({ active: isOpenStatus })}
          onClick={() => setIsOpenStatus(!isOpenStatus)}
          text={selectedStatus === "All" ? column.status : selectedStatus}
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={isOpenStatus}>
            {ServiceStatuses.map((text, index) => (
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
      <div className="table-column-cell-10"></div>
    </>
  );
};

export default HeaderService;
