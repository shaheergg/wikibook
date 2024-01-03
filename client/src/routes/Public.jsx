import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Public = () => {
  const { auth } = useAuth();

  if (auth) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
};
