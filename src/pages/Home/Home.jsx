import React, { useEffect, useState  } from "react";
import Sidebar from '../../components/Layout/Sidebar';
import Loader from '../../components/Loader/Loader';
import Category from '../Category/Category';
import '../login/login.css';
import { useDispatch, useSelector } from "react-redux";
import { requestCart } from "../../_actions/cartActions";


function Home({ children }) {
  const [restloader, setrestLoader] = useState(true);
 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestCart());
    setInterval(() => {
      setrestLoader(false);
    }, 2000);
  }, [restloader]);

  return restloader ? (
    <Loader />
  ) : (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
}

export default Home
