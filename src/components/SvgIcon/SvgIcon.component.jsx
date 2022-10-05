import React from "react";
import classNames from "classnames";
import { ReactSVG } from "react-svg";

import "./SvgIcon.module.css";

export const SvgIconComponent = ({
  src,
  size = 24,
  color = "inherit",
  rotate,
  className,
  style,
  onClick,
  onMouseMove,
  defaultStroke,
  disabled,
}) => {
  const svgIconClass = classNames(
    "svgIcon",
    {
      [`svgIcon_rotate_${rotate}`]: rotate,
      ["defaultStroke"]: defaultStroke,
      disabled: disabled,
    },
    className
  );

  const stroke = defaultStroke ? {} : { stroke: color };

  const customStyles = {
    width: `${size}px`,
    height: `${size}px`,
    ...style,
    ...stroke,
  };

  return (
    <ReactSVG
      src={src}
      className={svgIconClass}
      onClick={onClick}
      onMouseMove={onMouseMove}
      style={customStyles}
    />
  );
};

SvgIconComponent.displayName = "SvgIcon";
