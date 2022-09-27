import React from "react";
import { useEffect } from "react";

import { Button } from "../../components/Button";
import { Filter } from "../../components/Filter";
import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import { UsersTableColumn, UsersTableInfo } from "./constants";
import {
  TableVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const Users = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container users">
        <div className="users-tools">
          <Button text="Add user" />
          <div className="export">
            <Text
              className="cursor-pointer"
              variant={TextVariants.subtitle_medium}
            >
              Export
            </Text>
            <Filter placeholder={"Search"} />
          </div>
        </div>
        <Table
          variant={TableVariants.Users}
          data={UsersTableInfo}
          columnNames={UsersTableColumn}
        />
      </div>
    </>
  );
};

export default Users;
