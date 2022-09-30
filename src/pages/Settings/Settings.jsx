import React from "react";
import { useEffect } from "react";

import { Input } from "../../components/Input";
import { SvgIcon } from "../../components/SvgIcon";
import { Text } from "../../components/Text";
import {
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const Settings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container settings">
        <div className="settings-container">
          <div className="setting">
            <div>
              <Text variant={TextVariants.subtitle_bold}>Singup page</Text>
              <i className="fas fa-info-circle"></i>
            </div>
            <Input
              rightSide={
                <SvgIcon
                  src={IconsVariants.DropDown_arrow_stroke}
                  size={20}
                  color={"#000"}
                />
              }
            />
          </div>
          <div className="setting">
            <div>
              <Text variant={TextVariants.subtitle_bold}>
                Email confirmation
              </Text>
              <i className="fas fa-info-circle"></i>
            </div>
            <Input
              rightSide={
                <SvgIcon
                  src={IconsVariants.DropDown_arrow_stroke}
                  size={20}
                  color={"#000"}
                />
              }
            />
          </div>
          <div className="setting">
            <div>
              <Text variant={TextVariants.subtitle_bold}>Terms checkbox</Text>
              <i className="fas fa-info-circle"></i>
            </div>
            <Input
              rightSide={
                <SvgIcon
                  src={IconsVariants.DropDown_arrow_stroke}
                  size={20}
                  color={"#000"}
                />
              }
            />
          </div>
          <div className="setting">
            <div>
              <Text variant={TextVariants.subtitle_bold}>Reset password</Text>
              <i className="fas fa-info-circle"></i>
            </div>
            <Input
              rightSide={
                <SvgIcon
                  src={IconsVariants.DropDown_arrow_stroke}
                  size={20}
                  color={"#000"}
                />
              }
            />
          </div>
          <div className="setting">
            <div>
              <Text variant={TextVariants.subtitle_bold}>
                Minimum drip-feed interval
              </Text>
              <i className="fas fa-info-circle"></i>
            </div>
            <Input />
          </div>
          <div className="separator"></div>
          <div className="setting-area">
            <div>
              <Text variant={TextVariants.subtitle_bold}>
                Custom header code
              </Text>
              <i className="fas fa-info-circle"></i>
            </div>
            <Input />
          </div>
          <div className="setting-area">
            <div>
              <Text variant={TextVariants.subtitle_bold}>
                Custom footer code
              </Text>
              <i className="fas fa-info-circle"></i>
            </div>
            <Input />
          </div>
          <div className="separator"></div>
        </div>
      </div>
    </>
  );
};

export default Settings;
