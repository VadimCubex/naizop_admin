import classNames from "classnames";

import {
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { ModalPortal } from "../Portal";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const ModalComponent = ({
  title,
  isOpen,
  onClick,
  children,
  footer,
  className,
}) => {
  const ModalClass = classNames("modal", { active: isOpen }, className);

  return (
    <>
      <ModalPortal>
        <div
          className={ModalClass}
          onScroll={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="modal-container">
            <div className="header-modal">
              <Text variant={TextVariants.h5_regular}>{title}</Text>
              <SvgIcon
                className="cursor-pointer"
                src={IconsVariants.Close}
                size={20}
                onClick={onClick}
                color={"#000"}
              />
            </div>
            <div className="modal-contant">{children}</div>
            {footer && <div className="modal-footer">{footer}</div>}
          </div>
        </div>
      </ModalPortal>
    </>
  );
};

ModalComponent.displayName = "ModalRanks";
