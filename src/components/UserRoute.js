import React, { Component } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Cart from "../pages/CartList/cart";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Auth from "../_helpers/auth";

const UserRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector((store) => store.userStore);
  const { userInfo } = user;
  const { token, role } = userInfo;
  const User = () => {
    return role === "user";
  };
  console.log("hello i am from user rotue ");
  return (
    <Route
      {...rest}
      render={(props) =>
        User() ? (
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
};
export default UserRoute;
