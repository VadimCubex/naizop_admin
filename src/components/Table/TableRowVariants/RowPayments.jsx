import React from "react";
import classNames from "classnames";

import {
  IconsVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { Button } from "../../Button";
import { DropDown } from "../../DropDown";
import { Text } from "../../Text";
import { UsersActions } from "../constants";

import { useUsersTableSelector } from "../../../store/Tables/UsersTable/useUsersTable";
import { useTablesActions } from "../../../store/Tables/useTablesActions";

const RowPayments = ({ item }) => {
  const { activeAction } = useUsersTableSelector();
  const { SetUserActiveAction } = useTablesActions();

  return (
    <div className="table-row-content">
      <div className="table-row-cell-1">
        <Text variant={TextVariants.subtitle_medium}>{item.id}</Text>
      </div>
      <div className="table-row-cell-2">
        <Text variant={TextVariants.subtitle_medium}>{item.user}</Text>
      </div>
      <div className="table-row-cell-3">
        <Text variant={TextVariants.subtitle_medium}>{item.balance}</Text>
      </div>
      <div className="table-row-cell-4">
        <Text variant={TextVariants.subtitle_medium}>{item.amount}</Text>
      </div>
      <div className="table-row-cell-5">
        <Text variant={TextVariants.subtitle_medium}>{item.method}</Text>
      </div>
      <div className="table-row-cell-6">
        <Text variant={TextVariants.subtitle_medium}>{item.status}</Text>
      </div>
      <div className="table-row-cell-7">
        <Text variant={TextVariants.subtitle_medium}>{item.fraudRisk}</Text>
      </div>
      <div className="table-row-cell-8">
        <Text variant={TextVariants.subtitle_medium}>{item.memo}</Text>
      </div>
      <div className="table-row-cell-9">
        <Text variant={TextVariants.subtitle_medium}>{item.created}</Text>
      </div>
      <div className="table-row-cell-10">
        <Text variant={TextVariants.subtitle_medium}>{item.updated}</Text>
      </div>
      <div className="table-row-cell-11">
        <Text variant={TextVariants.subtitle_medium}>{item.mode}</Text>
      </div>
      <div className="table-row-cell-12">
        <Button
          className={classNames("actions", {
            active: activeAction === item.id,
          })}
          onClick={() => SetUserActiveAction(item.id)}
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

export default RowPayments;
