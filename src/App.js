import { useDispatch, useSelector } from 'react-redux';
import { Link  ,Switch ,Route } from 'react-router-dom';
import './App.css';
import AdminRoute from './components/AdminRoute';
import UserRoute from './components/UserRoute';
import Cart from './pages/Home/cart';
import Home from './pages/Home/Home';
import Login from './pages/login/Login';
import Product from './pages/Product';
import { signOut } from './_actions/userActions';

function App() {
     const dispatch = useDispatch();
      const userSignIn = useSelector((store) => store.userStore);
   
      const userInfos = JSON.parse(localStorage.getItem("userInfo"));
       const { loggedIn } = userSignIn;
   
   const logOut = () => {
     dispatch(signOut());
    };
  return (
    <div className="App">
      {loggedIn ? (
        <>
          <Link to="cart">cart </Link> <br/>
          <Link to="home">Home</Link> <br />
          <Link to="product">Product</Link> <br />
          <button type="button" onClick={logOut}>
            Log out
          </button>
        </>
      ) : (
        <Login />
      )}

      <Switch>
        <Route exact path="/signin" component={Login} />
        <Route exact path="/userin" component={Login} />
        <AdminRoute path="/cart" component={Cart} />
        <AdminRoute path="/home" component={Home} />
        <UserRoute path="/product" component={Product} />
      </Switch>
    </div>
  );
}

export default App;
