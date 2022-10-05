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
import { ServiceStatuses, ServiceTypes, UsersStatuses } from "../constants";

import { useTableSelector } from "../../../store/Tables/useTable";
import { useTablesActions } from "../../../store/Tables/useTablesActions";

const HeaderService = ({ column }) => {
  const [checked, setChecked] = useState(column.checked);
  const { activeColumn } = useTableSelector();
  const { setActiveColumn, setActiveAction } = useTablesActions();

  const [selectedStatus, setSelectedStatus] = useState(UsersStatuses[0]);
  const [selectedType, setSelectedType] = useState(UsersStatuses[0]);

  const handleClickStatus = (e, text) => {
    setActiveColumn("");
    setActiveAction("");
    setSelectedStatus(text);
    e.stopPropagation();
  };

  const handleClickType = (e, text) => {
    setActiveColumn("");
    setActiveAction("");
    setSelectedType(text);
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
        <Text variant={TextVariants.subtitle_bold}>{column.service}</Text>
      </div>
      <div className="table-column-cell-4">
        <Button
          className={classNames({ active: activeColumn === "Type" })}
          onClick={() => setActiveColumn("Type")}
          text={selectedType === "All" ? column.type : selectedType}
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={activeColumn === "Type"}>
            {ServiceTypes.map((text, index) => (
              <div
                key={index}
                onClick={(e) => handleClickType(e, text)}
                className="action-item cursor-pointer"
              >
                <Text variant={TextVariants.subtitle_medium}>{text}</Text>
              </div>
            ))}
          </DropDown>
        </Button>
      </div>
      <div className="table-column-cell-5">
        <Text variant={TextVariants.subtitle_bold}>{column.rate}</Text>
      </div>
      <div className="table-column-cell-6">
        <Text variant={TextVariants.subtitle_bold}>{column.min}</Text>
      </div>
      <div className="table-column-cell-7">
        <Text variant={TextVariants.subtitle_bold}>{column.max}</Text>
      </div>
      <div className="table-column-cell-8">
        <Button
          className={classNames({ active: activeColumn === "Status" })}
          onClick={() => setActiveColumn("Status")}
          text={selectedStatus === "All" ? column.status : selectedStatus}
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={activeColumn === "Status"}>
            {ServiceStatuses.map((text, index) => (
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
      <div className="table-column-cell-9"></div>
    </>
  );
};

export default HeaderService;
