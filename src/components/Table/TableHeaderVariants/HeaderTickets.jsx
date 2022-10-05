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
import { TicketsStatuses } from "../constants";

import { useTableSelector } from "../../../store/Tables/useTable";
import { useTablesActions } from "../../../store/Tables/useTablesActions";

const HeaderTickets = ({ column }) => {
  const [checked, setChecked] = useState(column.checked);
  const { activeColumn } = useTableSelector();
  const { setActiveColumn } = useTablesActions();
  const [selectedStatus, setSelectedStatus] = useState(TicketsStatuses[0]);

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
        <Text variant={TextVariants.subtitle_bold}>{column.subject}</Text>
      </div>

      <div className="table-column-cell-5">
        <Button
          className={classNames({ active: activeColumn === "Status" })}
          onClick={() => setActiveColumn("Status")}
          text={selectedStatus === "All" ? column.status : selectedStatus}
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={activeColumn === "Status"}>
            {TicketsStatuses.map((text, index) => (
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
      <div className="table-column-cell-6">
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
      <div className="table-column-cell-7">
        <Text variant={TextVariants.subtitle_bold}>{column.lastUpdated}</Text>
      </div>
    </>
  );
};

export default HeaderTickets;
