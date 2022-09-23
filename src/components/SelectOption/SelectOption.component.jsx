import React from "react";
import { Default } from ".";

import { SelectOptionVariants } from "../../constants/VariantsOfComponents";

export const SelectOptionComponent = ({
  value,
  onClick,
  selected,
  variant,
}) => {
  const OptionVariantMap = {
    [SelectOptionVariants.Default]: (
      <Default
        onClick={onClick}
        className={!selected && "selectOption-padding-y-10"}
        value={value}
      />
    ),
  };

  return <>{OptionVariantMap[variant]}</>;
};

SelectOptionComponent.displayName = "SelectOption";
