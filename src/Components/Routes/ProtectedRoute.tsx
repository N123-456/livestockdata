import React from 'react'

import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = ({ children }: any) => {
const token = localStorage.getItem("token");
 return !token ? <Navigate to="/" /> :children ;
  
};



export default ProtectedRoute
