import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import FAQ from "../pages/FAQ/FAQ";
import Tools from "../pages/Tools/Tools";
import Users from "../pages/Users/Users";

const NaizopRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="users" element={<Users />} />
        <Route path="orders" element={<FAQ className="background-img" />} />
        <Route path="services" element={<FAQ className="background-img" />} />
        <Route path="payments" element={<Blog className="background-img" />} />
        <Route path="tickets" element={<Tools className="background-img" />} />
        <Route path="settings" element={<About className="background-img" />} />
        <Route path="/" element={<Navigate to="/users" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default NaizopRoutes;
