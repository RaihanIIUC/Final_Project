import React, { Component } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "../_helpers/auth";

const AdminRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector((store) => store.userStore);
  const { userInfo } = user;
  const { token, role } = userInfo;
  const Admin = () => {
    return role === "admin";
  };
  console.log("hello i am from admin rotue ", Admin());

  return (
    <Route
      {...rest}
      render={(props) =>
        Admin() ? (
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
export default AdminRoute;
