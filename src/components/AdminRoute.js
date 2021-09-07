import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
  import Auth from "../_helpers/auth";
 
  const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        Auth.Admin_Role()   ? (
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
export default AdminRoute;
