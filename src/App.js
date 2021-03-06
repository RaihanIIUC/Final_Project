import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useHistory } from "react-router-dom";
import AdminRoute from "./components/AdminRoute";
import Category from "./pages/Category/Category";
import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import "./pages/login/login.css";
import "./App.css";
import AddProduct from "./pages/Product/AddProduct";
import ProudctList from "./pages/Product/All_product/ProudctList";
import ProductDetails from "./pages/Product/ProductOverView/ProductDetails";
import Cart from "./pages/CartList/cart";
import All from "./pages/Product/All_product/all";
import CategoryList from "./pages/Category/CategoryList";
import EditCategory from "./pages/Category/EditCategory";
// import UserList from "./pages/user/UserList";
import UserList from "./pages/user/userList";
import EditUser from "./pages/user/editUser";
import Order from "./pages/Order/Order";
import { RouterPath } from "./_Redux/_helpers/RoutePath";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
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
    <div className="App">
      <Switch>
        <Route exact path="/signin" component={Login} />

        <Route exact path="/home" component={ProudctList} />
        <Route exact path="/all" component={All} />
        <Route exact path="/" component={Home} />
        <Route exact path="/userin" component={Login} />
        <AdminRoute
          path={RouterPath.CATEGORY_LIST_PAGE}
          component={CategoryList}
        />
        <Route path={RouterPath.CART_LIST} component={Cart} />
        <AdminRoute path="/category" component={Category} />
        <AdminRoute
          path={`${RouterPath.CATEGORY_EDIT_PAGE}/:id`}
          component={EditCategory}
        />
        <AdminRoute path="/product" component={AddProduct} />
        <AdminRoute path={RouterPath.USER_LIST_PAGE} component={UserList} />
        <AdminRoute path={RouterPath.ORDER_STATUS_PAGE} component={Order} />
        <AdminRoute
          path={`${RouterPath.USER_EDIT_PAGE}/:id`}
          component={EditUser}
        />
        <Route path="/products/:id" component={ProductDetails} />
        <Route path={RouterPath.PRODUCTS} component={ProudctList} />
        <Route path="*">404</Route>
      </Switch>
    </div>
  );
}

export default App;
