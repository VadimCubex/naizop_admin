import React from "react";
import { useState } from "react";
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
import { UsersActions } from "../constants";

const RowUsers = ({ item }) => {
  const [checked, setChecked] = useState(item.checked);
  const [isOpenActions, setIsOpenActions] = useState(false);

  return (
    <div
      className={classNames("table-row-content", { suspended: item.status })}
    >
      <div className="table-row-cell-1">
        <Checkbox onChange={() => setChecked(!checked)} value={checked} />
      </div>
      <div className="table-row-cell-2">
        <Text variant={TextVariants.subtitle_medium}>{item.id}</Text>
      </div>
      <div className="table-row-cell-3">
        <Text variant={TextVariants.subtitle_medium}>{item.username}</Text>
      </div>
      <div className="table-row-cell-4">
        <Text variant={TextVariants.subtitle_medium}>
          {item.email}
          <Text className="status" variant={TextVariants.subtitle_medium}>
            {item.emailConfirmed ? "✓" : "×"}
          </Text>
        </Text>
        <div className="icons">
          <SvgIcon src={IconsVariants.User} size={14} />
          <SvgIcon src={IconsVariants.Skype} size={14} />
        </div>
      </div>
      <div className="table-row-cell-5">
        <Text variant={TextVariants.subtitle_medium}>{item.balance}</Text>
      </div>
      <div className="table-row-cell-6">
        <Text variant={TextVariants.subtitle_medium}>{item.spend}</Text>
      </div>
      <div className="table-row-cell-7">
        <Text variant={TextVariants.subtitle_medium}>
          {item.status ? "Suspended" : "Active"}
        </Text>
      </div>
      <div className="table-row-cell-8">
        <Text variant={TextVariants.subtitle_medium}>{item.created}</Text>
      </div>
      <div className="table-row-cell-9">
        <Text variant={TextVariants.subtitle_medium}>{item.lastAuth}</Text>
      </div>
      <div className="table-row-cell-10">
        <Button text="Set discount" />
      </div>
      <div className="table-row-cell-11">
        <Button text="Set custom rates" />
      </div>
      <div className="table-row-cell-12">
        <Button
          className={classNames("actions", { active: isOpenActions })}
          onClick={() => setIsOpenActions(!isOpenActions)}
          text="Actions"
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={isOpenActions}>
            {UsersActions.map((text, index) => (
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

export default RowUsers;
