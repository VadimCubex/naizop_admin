import React from "react";
import classNames from "classnames";

import { TextVariants } from "../../constants/VariantsOfComponents";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const ButtonComponent = ({
  text,
  id,
  width = "content",
  icon,
  iconUnicode,
  iconPosition = "left",
  onClick,
  type = "button",
  disabled,
  style,
  className,
  children,
}) => {
  const buttonClass = classNames(
    "button",
    {
      [`button_width_${width}`]: width,
      [`button_icon_position_${iconPosition}`]: iconPosition,
      disabled: disabled,
    },
    className
  );

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={disabled ? () => null : onClick}
      style={style}
      type={type}
      id={id}
    >
      {children}
      <div>
        {iconUnicode && iconUnicode}
        {icon && <SvgIcon src={icon} size={14} color={"#000000"} />}
        {text && <Text variant={TextVariants.subtitle_medium}>{text}</Text>}
      </div>
    </button>
  );
};

ButtonComponent.displayName = "Button";
