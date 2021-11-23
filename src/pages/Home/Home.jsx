import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Layout/Sidebar";
import "../login/login.css";
import { useSelector } from "react-redux";
import Login from "../login/Login";

function Home({ children }) {
  const [restloader, setrestLoader] = useState(true);
  const userSignIn = useSelector((store) => store.userStore);
  const { loggedIn, user } = userSignIn;

  useEffect(() => {
    setInterval(() => {
      setrestLoader(false);
    }, 2000);
  }, [restloader]);

  return <>{loggedIn ? <Sidebar>{children}</Sidebar> : <Login />}</>;
}

export default Home;
