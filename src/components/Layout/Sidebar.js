import React, { Component, useEffect, useState }  from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
 import './sidebar.css';
import Navbars from '../Header/Navbars'
import { RouterPath } from '../../_helpers/RoutePath';
import { useSelector } from 'react-redux';


const  Sidebar =({ children }) => {


    const [userRole, setUserRole] = useState(false);
    const [adminRole, setAdminRole] = useState(false);
    const [restloader, setrestLoader] = useState(true);
    const userSignIn = useSelector((store) => store.userStore);
    const { loggedIn, user } = userSignIn;

    useEffect(() => {
      if (loggedIn) {
        const { userInfo } = user;
        const { role } = userInfo;
        if (role === "admin") {
          console.log("i am from admin");
          setAdminRole(true);
        } else if (role === "user") {
          console.log(" i am from user ");
          setUserRole(true);
        } else {
          console.log("no user");
        }
      }
    }, []);
    return (
      <div>
        <div className="wrapper">
          <Navbars />
          <Grid container>
            <Grid item xs={2}>
              <div className="sidebar">
                <div className="profile">
                  <img src="/image/Raihan.jpg" alt="profile_picture" />
                  <h3>Raihan</h3>
                  <p>Developer</p>
                </div>
                <ul>
                  <li>
                    <Link to="#" className="active">
                      <span className="icon">
                        <i className="fas fa-home"></i>
                      </span>
                      <span className="item">Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="icon">
                        <i className="fas fa-desktop"></i>
                      </span>
                      {adminRole && (
                        <span className="item">Admin</span>
                      )}
                      {userRole && <span className="item">User Dashboard</span>}
                    </Link>
                  </li>
                  {adminRole && (
                    <li>
                      <Link to={RouterPath.PRODUCT}>
                        <span className="icon">
                          <i className="fas fa-user-friends"></i>
                        </span>
                        <span className="item">Add Product</span>
                      </Link>
                    </li>
                  )}
                  <li>
                    <Link to={RouterPath.PRODUCTS}>
                      <span className="icon">
                        <i className="fas fa-tachometer-alt"></i>
                      </span>
                      <span className="item">Products</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={RouterPath.CART_LIST}>
                      <span className="icon">
                        <i className="fas fa-database"></i>
                      </span>
                      <span className="item">Cart List</span>
                    </Link>
                  </li>

                  {adminRole && (
                    <li>
                      <Link to={RouterPath.ORDER_STATUS_PAGE}>
                        <span className="icon">
                          <i className="fas fa-chart-line"></i>
                        </span>
                        <span className="item">Order Status</span>
                      </Link>
                    </li>
                  )}
                  {adminRole && (
                    <li>
                      <Link to={RouterPath.CATEGORY_LIST_PAGE}>
                        <span className="icon">
                          <i className="fas fa-chart-line"></i>
                        </span>
                        <span className="item">Category List</span>
                      </Link>
                    </li>
                  )}
                  {adminRole && (
                    <li>
                      <Link to={RouterPath.USER_LIST_PAGE}>
                        <span className="icon">
                          <i className="fas fa-chart-line"></i>
                        </span>
                        <span className="item">User List</span>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </Grid>

            <Grid item xs={10}>
              {children}
            </Grid>
          </Grid>
        </div>
      </div>
    );
}

export default Sidebar
 