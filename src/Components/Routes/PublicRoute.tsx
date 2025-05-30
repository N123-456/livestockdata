import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ children }: any) => {
  const token = localStorage.getItem("token");
  return !token ? children : <Navigate to="/dashboard" />;
};

export default PublicRoute;
