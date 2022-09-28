import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Blog from "../pages/Blog/Blog";
import Orders from "../pages/Orders/Orders";
import Services from "../pages/Services/Services";
import Tools from "../pages/Tools/Tools";
import Users from "../pages/Users/Users";

const NaizopRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="users" element={<Users />} />
        <Route path="orders" element={<Orders />} />
        <Route path="services" element={<Services />} />
        <Route path="payments" element={<Blog className="background-img" />} />
        <Route path="tickets" element={<Tools className="background-img" />} />
        <Route path="settings" element={<Orders />} />
        <Route path="/" element={<Navigate to="/users" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default NaizopRoutes;
