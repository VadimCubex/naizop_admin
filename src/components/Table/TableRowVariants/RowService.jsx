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
import { ServiceActions } from "../constants";

const RowService = ({ item }) => {
  const [isOpenActions, setIsOpenActions] = useState(false);
  const [checked, setChecked] = useState(item.checked);

  return (
    <div
      className={classNames("table-row-content", { suspended: item.status })}
    >
      <div className="table-row-cell-1">
        <SvgIcon src={IconsVariants.DragAndDrop} size={12} />
        <Checkbox onChange={() => setChecked(!checked)} value={checked} />
      </div>
      <div className="table-row-cell-2">
        <Text variant={TextVariants.subtitle_medium}>{item.id}</Text>
      </div>
      <div className="table-row-cell-3">
        <Text variant={TextVariants.subtitle_medium}>{item.service}</Text>
      </div>
      <div className="table-row-cell-4">
        <Text variant={TextVariants.subtitle_medium}>{item.type}</Text>
      </div>
      <div className="table-row-cell-5">
        <Text variant={TextVariants.subtitle_medium}>{item.provider}</Text>
      </div>
      <div className="table-row-cell-6">
        <Text variant={TextVariants.subtitle_medium}>{item.rate}</Text>
      </div>
      <div className="table-row-cell-7">
        <Text variant={TextVariants.subtitle_medium}>{item.min}</Text>
      </div>
      <div className="table-row-cell-8">
        <Text variant={TextVariants.subtitle_medium}>{item.max}</Text>
      </div>
      <div className="table-row-cell-9">
        <Text variant={TextVariants.subtitle_medium}>
          {item.status ? "Disabled" : "Enabled"}
        </Text>
      </div>
      <div className="table-row-cell-10">
        <Button
          className={classNames("actions", { active: isOpenActions })}
          onClick={() => setIsOpenActions(!isOpenActions)}
          text="Actions"
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={isOpenActions}>
            {ServiceActions.map((text, index) => (
              <div
                key={index}
                onClick={() => {
                  setIsOpenActions(false);
                }}
                className="action-item cursor-pointer"
              >
                <Text variant={TextVariants.subtitle_medium}>{text}</Text>
              </div>
            ))}
          </DropDown>
        </Button>
      </div>
    </div>
  );
};

export default RowService;
