import React, { useState } from "react";
import { useEffect } from "react";
import classNames from "classnames";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { NavLinks } from "./constants";
import { TextVariants } from "../../constants/VariantsOfComponents";
import { DropDown } from "../DropDown";
import { Text } from "../Text";

import { useTablesActions } from "../../store/Tables/useTablesActions";

export const MenuComponent = () => {
  const menuClass = classNames("menu");
  const [active, setActive] = useState("");
  const [isShowBurder, setIsShowBurder] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { setActiveAction, setActiveColumn } = useTablesActions();

  const handleClickItem = (item) => {
    navigate(item.link);
    setIsShowBurder(false);
    setActive(location.pathname);
    setActiveAction("");
    setActiveColumn("");
  };

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <header className={menuClass}>
      <nav className="container">
        <ul className="desktop">
          {NavLinks.map((item, index) => (
            <li
              className={classNames("cursor-pointer", {
                active: active === item.link,
              })}
              onClick={() => {
                handleClickItem(item);
              }}
              key={index}
            >
              <Link to={item.link ? item.link : ""}>
                <Text variant={TextVariants.h5_regular}>{item.text}</Text>
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={classNames("burger-icon-container", {
            change: isShowBurder,
          })}
          onClick={() => setIsShowBurder(!isShowBurder)}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div className="profile">
          <i className="fas fa-user-circle" />
        </div>
      </nav>
      <DropDown isOpen={isShowBurder}>
        <nav>
          <ul className="burger">
            {NavLinks.map((item, index) => (
              <li
                className={classNames("cursor-pointer", {
                  active: active === item.link,
                })}
                onClick={() => {
                  handleClickItem(item);
                }}
                key={index}
              >
                <Link to={item.link ? item.link : ""}>
                  <Text variant={TextVariants.h5_regular}>{item.text}</Text>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </DropDown>
    </header>
  );
};

MenuComponent.displayName = "Menu";
