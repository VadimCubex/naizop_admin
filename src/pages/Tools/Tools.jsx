import React from "react";
import { useEffect } from "react";
import classNames from "classnames";

import { Select } from "../../components/Select";
import { SvgIcon } from "../../components/SvgIcon";
import { Tab, Tabs } from "../../components/Tabs";
import { Text } from "../../components/Text";
import { TabsName } from "./constants";
import {
  SelectOptionVariants,
  TabsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

import { useToolsTabsSelector } from "../../store/Tools/ToolsTabs/useToolsTabs";
import { useToolsActions } from "../../store/Tools/useToolsActions";

const Tools = ({ container = true, className }) => {
  const ToolsClass = classNames(
    "tools-page",
    { container: container },
    className
  );
  const { activeSocial, activeTab } = useToolsTabsSelector();
  const { ChangeSocial, ChangeTab } = useToolsActions();

  const handleClickTab = (event, active) => {
    ChangeTab(active);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={ToolsClass}>
        <div className="tools-page-contant">
          <Tabs
            variant={TabsVariants.Default}
            active={activeTab}
            onClick={handleClickTab}
          >
            {TabsName.map((item, index) => (
              <Tab
                key={index}
                titleComponent={
                  <>
                    <div
                      onClick={() => {
                        ChangeSocial(item);
                      }}
                      className="tab-title"
                    >
                      <SvgIcon src={item.icon} />
                      <Text variant={TextVariants.h2_medium}>{item.title}</Text>
                    </div>
                    {activeTab - 1 === index ||
                      (activeTab !== index && index !== TabsName.length - 1 && (
                        <div className="separator"></div>
                      ))}
                  </>
                }
              />
            ))}
          </Tabs>
          <div className="select-tab">
            <Select
              setValue={ChangeSocial}
              value={activeSocial}
              variant={SelectOptionVariants.Default}
              options={TabsName}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
