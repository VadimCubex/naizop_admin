import React, { useState } from "react";
import { useEffect } from "react";
import classNames from "classnames";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { NavLinks } from "./constants";
import { TextVariants } from "../../constants/VariantsOfComponents";
import { Text } from "../Text";

export const MenuComponent = () => {
  const [active, setActive] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const menuClass = classNames("menu");

  const handleClickItem = (item) => {
    navigate(item.link);
    setActive(location.pathname);
  };

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <header className={menuClass}>
      <div className="container">
        <nav>
          <ul>
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
      </div>
    </header>
  );
};

MenuComponent.displayName = "Menu";
