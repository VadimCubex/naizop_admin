import React, { useState } from "react";
import classNames from "classnames";

import {
  IconsVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { Button } from "../../Button";
import { Checkbox } from "../../Checkbox";
import { DropDown } from "../../DropDown";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";
import { UsersStatuses } from "../constants";

import { useTableSelector } from "../../../store/Tables/useTable";
import { useTablesActions } from "../../../store/Tables/useTablesActions";

const HeaderUsers = ({ column }) => {
  const [checked, setChecked] = useState(column.checked);
  const [selectedStatus, setSelectedStatus] = useState(UsersStatuses[0]);
  const { activeColumn } = useTableSelector();
  const { setActiveColumn } = useTablesActions();

  const handleClickStatus = (e, text) => {
    setActiveColumn("");
    setSelectedStatus(text);
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
        <div className="sort-icons">
          <SvgIcon src={IconsVariants.DropDown_arrow_fill} size={7} />
        </div>
      </div>
      <div className="table-column-cell-3">
        <Text variant={TextVariants.subtitle_bold}>{column.username}</Text>
      </div>
      <div className="table-column-cell-4">
        <Text variant={TextVariants.subtitle_bold}>{column.email}</Text>
      </div>
      <div className="table-column-cell-5">
        <Text variant={TextVariants.subtitle_bold}>{column.balance}</Text>
        <div className="sort-icons">
          <SvgIcon
            src={IconsVariants.DropDown_arrow_fill}
            size={7}
            rotate={"180"}
          />
          <SvgIcon src={IconsVariants.DropDown_arrow_fill} size={7} />
        </div>
      </div>
      <div className="table-column-cell-6">
        <Text variant={TextVariants.subtitle_bold}>{column.spend}</Text>
        <div className="sort-icons">
          <SvgIcon
            src={IconsVariants.DropDown_arrow_fill}
            size={7}
            rotate={"180"}
          />
          <SvgIcon src={IconsVariants.DropDown_arrow_fill} size={7} />
        </div>
      </div>
      <div className="table-column-cell-7">
        <Button
          className={classNames({ active: activeColumn === "Status" })}
          onClick={() => setActiveColumn("Status")}
          text={selectedStatus === "All" ? column.status : selectedStatus}
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={activeColumn === "Status"}>
            {UsersStatuses.map((text, index) => (
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
      <div className="table-column-cell-8">
        <Text variant={TextVariants.subtitle_bold}>{column.created}</Text>
        <div className="sort-icons">
          <SvgIcon
            src={IconsVariants.DropDown_arrow_fill}
            size={7}
            rotate={"180"}
          />
          <SvgIcon src={IconsVariants.DropDown_arrow_fill} size={7} />
        </div>
      </div>
      <div className="table-column-cell-9">
        <Text variant={TextVariants.subtitle_bold}>{column.lastAuth}</Text>
        <div className="sort-icons">
          <SvgIcon
            src={IconsVariants.DropDown_arrow_fill}
            size={7}
            rotate={"180"}
          />
          <SvgIcon src={IconsVariants.DropDown_arrow_fill} size={7} />
        </div>
      </div>
      <div className="table-column-cell-10">
        <Text variant={TextVariants.subtitle_bold}>{column.discount}</Text>
        <div className="sort-icons">
          <SvgIcon
            src={IconsVariants.DropDown_arrow_fill}
            size={7}
            rotate={"180"}
          />
          <SvgIcon src={IconsVariants.DropDown_arrow_fill} size={7} />
        </div>
      </div>
      <div className="table-column-cell-11">
        <Text variant={TextVariants.subtitle_bold}>{column.customRates}</Text>
        <div className="sort-icons">
          <SvgIcon
            src={IconsVariants.DropDown_arrow_fill}
            size={7}
            rotate={"180"}
          />
          <SvgIcon src={IconsVariants.DropDown_arrow_fill} size={7} />
        </div>
      </div>
      <div className="table-column-cell-12"></div>
    </>
  );
};

export default HeaderUsers;
