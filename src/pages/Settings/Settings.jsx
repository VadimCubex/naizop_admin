import React from "react";
import { useEffect } from "react";

import { Button } from "../../components/Button";
import { Filter } from "../../components/Filter";
import { Table } from "../../components/Table";
import { SettingsTableColumn, SettingsTableInfo } from "./constants";
import { TableVariants } from "../../constants/VariantsOfComponents";

const Settings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container settings">
        <div className="settings-container">
          <div className="settings-tools">
            <Button text="Add provider" />
            <Filter
              isShowButton={false}
              leftSide={<i className="fas fa-search"></i>}
              placeholder={"Search provider"}
            />
          </div>
          <Table
            variant={TableVariants.Provider}
            columnNames={SettingsTableColumn}
            data={SettingsTableInfo}
          />
        </div>
      </div>
    </>
  );
};

export default Settings;
