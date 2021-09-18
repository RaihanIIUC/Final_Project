import React, { useEffect, useState  } from "react";
import Sidebar from '../../components/Layout/Sidebar';
import Loader from '../../components/Loader/Loader';
import Category from '../Category/Category';
import '../login/login.css';

function Home(props) {
  const [restloader, setrestLoader] = useState(true);

  useEffect(() => {
    setInterval(() => {
        setrestLoader(false);
           }, 2000);
         
  }, [restloader]);
 


  return restloader ? (
    <Loader />
  ) : (
    <>
      <Sidebar>{props.children}</Sidebar>
    </>
  );
}

export default Home
