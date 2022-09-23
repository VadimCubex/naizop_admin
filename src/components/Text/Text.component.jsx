import React from "react";
import classNames from "classnames";

export const TextComponent = ({ variant, className, onClick, children }) => {
  const TextClass = classNames(
    "text",
    {
      [`text_variant_${variant}`]: variant,
    },
    className
  );

  return (
    <span onClick={onClick} className={TextClass}>
      {children}
    </span>
  );
};

TextComponent.displayName = "Text";
