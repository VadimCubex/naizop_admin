import React, { useState } from "react";
import classNames from "classnames";

import { ServiceCategoryActions } from "./constants";
import {
  DropDownVariants,
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { Button } from "../Button";
import { DropDown } from "../DropDown";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const AccordionComponent = ({ category, children, className }) => {
  const [isShowDropDown, setIsShowDropDown] = useState(true);
  const [isOpenActions, setIsOpenActions] = useState(false);

  const AccordionClass = classNames(
    "accordion",
    { active: isShowDropDown },
    className
  );

  return (
    <div className="accordion-container">
      <div className={AccordionClass}>
        <div className="accordion-title">
          <SvgIcon
            className="drag-drop-icon"
            src={IconsVariants.DragAndDrop}
            size={12}
          />
          <Text variant={TextVariants.subtitle_medium}>
            {category.title ? category.title : "Not Assigned"}
          </Text>
          <Button
            className={classNames("actions", { active: isOpenActions })}
            onClick={() => setIsOpenActions(!isOpenActions)}
            text="Actions"
            iconPosition="right"
            icon={IconsVariants.DropDown_arrow_fill}
          >
            <DropDown isOpen={isOpenActions}>
              {ServiceCategoryActions.map((text, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setIsOpenActions(false);
                  }}
                  className="action-item cursor-pointer"
                >
                  <Text variant={TextVariants.subtitle_medium}>{text}</Text>
                </div>
              ))}
            </DropDown>
          </Button>
        </div>
        {category.services && (
          <div
            onClick={() => setIsShowDropDown(!isShowDropDown)}
            className="cursor-pointer show"
          >
            <Text variant={TextVariants.subtitle_medium}>
              {isShowDropDown ? "Hide" : "Show"} services (
              {category.services.length})
            </Text>
            <SvgIcon
              src={IconsVariants.DropDown_arrow_fill}
              size={8}
              rotate={isShowDropDown ? "180" : "0"}
            />
          </div>
        )}
      </div>
      <DropDown variant={DropDownVariants.accordion} isOpen={isShowDropDown}>
        {children}
      </DropDown>
    </div>
  );
};

AccordionComponent.displayName = "Accordion";
