import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isVerified = sessionStorage.getItem("isVerified");

  return isVerified === "true" ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
