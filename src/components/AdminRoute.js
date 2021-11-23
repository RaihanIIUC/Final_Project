import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { history } from "../_Redux/_helpers/history";

const AdminRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector((store) => store.userStore);

  const { userInfo } = user;

  const { token, role } = userInfo;
  if (!token) {
    history.push("/");
  }
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
