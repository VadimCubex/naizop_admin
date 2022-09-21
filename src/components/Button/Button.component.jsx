import React from "react";
import classNames from "classnames";

import {
  ButtonVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const ButtonComponent = ({
  text,
  id,
  variant,
  width = "content",
  icon,
  iconPosition = "left",
  onClick,
  type = "button",
  disabled,
  style,
  className,
}) => {
  const buttonClass = classNames(
    "button",
    {
      [`button_variant_${variant}`]: variant,
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
      <div>
        {icon && (
          <SvgIcon
            src={icon}
            size={variant === ButtonVariants.crypto ? 34 : 24}
          />
        )}
        {text && <Text variant={TextVariants.subtitle_small}>{text}</Text>}
      </div>
    </button>
  );
};

ButtonComponent.displayName = "Button";
