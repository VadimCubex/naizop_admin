import React from "react";
import { useState } from "react";
import classNames from "classnames";

import { SelectOptionVariants } from "../../constants/VariantsOfComponents";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";

export const FilterComponent = ({
  isShowButton = true,
  leftSide,
  placeholder,
  options,
  isShowSelect = false,
  selectValue,
  setSelectValue,
  className,
}) => {
  const [value, setValue] = useState("");

  const FilterClass = classNames("filter", className);

  return (
    <div className={FilterClass}>
      <Input
        leftSide={leftSide}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {isShowSelect && (
        <Select
          className={classNames({ ["right-border-radius"]: !isShowButton })}
          options={options}
          setValue={setSelectValue}
          value={selectValue}
          variant={SelectOptionVariants.Default}
        />
      )}
      {isShowButton && (
        <Button
          className="right-border-radius"
          iconUnicode={<i className="fas fa-search"></i>}
        />
      )}
    </div>
  );
};

FilterComponent.displayName = "Filter";
