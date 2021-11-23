import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { history } from "../_Redux/_helpers/history";

const UserRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector((store) => store.userStore);
  const { userInfo } = user;

  const { token, role } = userInfo;
  if (!token) {
    history.push("/");
  }
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
