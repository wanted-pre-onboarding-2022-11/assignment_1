import Login from "@/pages/Login";
import SignUp from "@/pages/Signup";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import ROUTE_PATH from "./routePaths";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTE_PATH.BASE}
          element={
            <ProtectedRoute isTokenRequired redirectPath={ROUTE_PATH.TODO_LIST}>
              <Login />
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTE_PATH.SIGN_UP}
          element={
            <ProtectedRoute isTokenRequired redirectPath={ROUTE_PATH.TODO_LIST}>
              <SignUp />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTE_PATH.TODO_LIST}
          element={
            <ProtectedRoute isTokenRequired={false} redirectPath={ROUTE_PATH.BASE}>
              <h1>투두 리스트</h1>
            </ProtectedRoute>
          }
        />
        <Route path={ROUTE_PATH.NOT_FOUND} element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
