import React from "react";

import { TextVariants } from "../../../constants/VariantsOfComponents";
import { Text } from "../../Text";

export const DefaultComponent = ({ onClick, value }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer selectOption_variant_default"
    >
      <Text className="title" variant={TextVariants.subtitle_medium}>
        {value?.title}
      </Text>
    </div>
  );
};

DefaultComponent.displayName = "Default";
