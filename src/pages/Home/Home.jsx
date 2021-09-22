import React, { useEffect, useState  } from "react";
import Sidebar from '../../components/Layout/Sidebar';
import Loader from '../../components/Loader/Loader';
import Category from '../Category/Category';
import '../login/login.css';
import { useDispatch, useSelector } from "react-redux";
import { requestCart } from "../../_actions/cartActions";
import Login from "../login/Login";


function Home({ children }) {
  const [restloader, setrestLoader] = useState(true);
 const dispatch = useDispatch();
  const userSignIn = useSelector((store) => store.userStore);
  const { loggedIn, user } = userSignIn;


  useEffect(() => {
     setInterval(() => {
      setrestLoader(false);
    }, 2000);
  }, [restloader]);

  return <>{loggedIn ? <Sidebar>{children}</Sidebar> : <Login />}</>; 
}

export default Home
