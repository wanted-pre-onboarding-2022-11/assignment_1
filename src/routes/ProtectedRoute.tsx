import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getAccessToken } from "@/utils/localStorage";

const ProtectedRoute = ({
  children,
  isTokenRequired,
  redirectPath,
}: {
  children: JSX.Element;
  isTokenRequired: boolean;
  redirectPath: string;
}) => {
  const token = getAccessToken();
  const location = useLocation();

  if (isTokenRequired === (token !== null))
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  return children;
};

export default ProtectedRoute;
