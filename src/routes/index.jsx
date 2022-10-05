import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login/Login";
import Orders from "../pages/Orders/Orders";
import Payment from "../pages/Payment/Payment";
import Services from "../pages/Services/Services";
import Settings from "../pages/Settings/Settings";
import Tickets from "../pages/Tickets/Tickets";
import Users from "../pages/Users/Users";

const NaizopRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="users" element={<Users />} />
        <Route path="orders" element={<Orders />} />
        <Route path="services" element={<Services />} />
        <Route path="payments" element={<Payment />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="settings" element={<Settings />} />
        <Route path="/" element={<Navigate to="/users" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default NaizopRoutes;
