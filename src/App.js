import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Switch, Route, useHistory, Redirect } from "react-router-dom";
import AdminRoute from "./components/AdminRoute";
import UserRoute from "./components/UserRoute";
import Category from "./pages/Category/Category";
import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import "./pages/login/login.css";
import Product from "./pages/Product";
import { signOut } from "./_actions/userActions";
import "./App.css";
import Auth from "./_helpers/auth";
import Loader from "./components/Loader/Loader";
import AddProduct from "./pages/Product/AddProduct";
import { RouterPath } from "./_helpers/RoutePath";
import ProudctList from "./pages/Product/All_product/ProudctList";
import ProductDetails from "./pages/Product/ProductOverView/ProductDetails";
import Cart from "./pages/CartList/cart";
import All from "./pages/Product/All_product/all";
import CategoryList from "./pages/Category/CategoryList";
import EditCategory from "./pages/Category/EditCategory";
import UserList from "./pages/user/UserList";
import EditUser from "./pages/user/editUser";


 function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [restloader, setrestLoader] = useState(true);
  const userSignIn = useSelector((store) => store.userStore);
  const { loggedIn, user } = userSignIn;
  //  const admin = Auth.Admin_Role();
  //  cons-t userRole = Auth.User_Role();
  //  useEffect(() => {
  //    if(Auth.Admin_Role){
  //      history.push('/home');
  //    }else{
  //      dispatch(signOut());
  //    }
  //  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/signin" component={Login} />

        <Route exact path="/home" component={Home} />
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
        <AdminRoute
          path={`${RouterPath.USER_LIST_PAGE}/:id`}
          component={EditUser}
        />
        <Route path="/products/:id" component={ProductDetails} />
        <AdminRoute path={RouterPath.PRODUCTS} component={ProudctList} />
        <UserRoute path="/product" component={Product} />
      </Switch>
    </div>
  );
}

export default App;
