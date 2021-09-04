import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Cart from "../pages/Home/cart";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
  import Auth from "../_helpers/auth";
 
  const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        Auth.Admin_Role() === "admin" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
            }}
          />
        )
      }
    />
  );
export default AdminRoute;
