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
import { Text } from "../../Text";
import { UsersActions } from "../constants";

import { useUsersTableSelector } from "../../../store/Tables/UsersTable/useUsersTable";
import { useTablesActions } from "../../../store/Tables/useTablesActions";

const RowOrders = ({ item }) => {
  const [checked, setChecked] = useState(item.checked);
  const { activeAction } = useUsersTableSelector();
  const { SetUserActiveAction } = useTablesActions();

  return (
    <div className={classNames("table-row-content")}>
      <div className="table-row-cell-1">
        <Checkbox onChange={() => setChecked(!checked)} value={checked} />
      </div>
      <div className="table-row-cell-2">
        <Text variant={TextVariants.subtitle_medium}>{item.id}</Text>
      </div>
      <div className="table-row-cell-3">
        <Text variant={TextVariants.subtitle_medium}>{item.user}</Text>
      </div>
      <div className="table-row-cell-4">
        <Text variant={TextVariants.subtitle_medium}>{item.charge}</Text>
      </div>
      <div className="table-row-cell-5">
        <Text variant={TextVariants.subtitle_medium}>{item.link}</Text>
      </div>
      <div className="table-row-cell-6">
        <Text variant={TextVariants.subtitle_medium}>{item.startCount}</Text>
      </div>
      <div className="table-row-cell-7">
        <Text variant={TextVariants.subtitle_medium}>{item.quantity}</Text>
      </div>
      <div className="table-row-cell-8">
        <Text variant={TextVariants.subtitle_medium}>{item.service}</Text>
      </div>
      <div className="table-row-cell-9">
        <Text variant={TextVariants.subtitle_medium}>{item.status}</Text>
      </div>
      <div className="table-row-cell-10">
        <Text variant={TextVariants.subtitle_medium}>{item.remains}</Text>
      </div>
      <div className="table-row-cell-11">
        <Text variant={TextVariants.subtitle_medium}>{item.created}</Text>
      </div>{" "}
      <div className="table-row-cell-12">
        <Text variant={TextVariants.subtitle_medium}>{item.mode}</Text>
      </div>
      <div className="table-row-cell-13">
        <Button
          className={classNames("actions", {
            active: activeAction === item.id,
          })}
          onClick={() => SetUserActiveAction(item.id)}
          text="Actions"
          iconPosition="right"
          icon={IconsVariants.DropDown_arrow_fill}
        >
          <DropDown isOpen={activeAction === item.id}>
            {UsersActions.map((text, index) => (
              <div
                key={index}
                onClick={(e) => {
                  SetUserActiveAction("");
                  e.stopPropagation();
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

export default RowOrders;
