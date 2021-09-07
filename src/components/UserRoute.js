import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Cart from "../pages/CartList/cart";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
  import Auth from "../_helpers/auth";
 
  const UserRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        Auth.User_Role() === "user" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
export default UserRoute;
