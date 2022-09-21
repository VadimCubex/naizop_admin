import React from "react";
import { Outlet } from "react-router-dom";

import { Menu } from "../components/Menu";

const MainLayout = () => {
  return (
    <>
      <Menu />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
