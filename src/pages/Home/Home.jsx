import React, { useEffect, useState  } from "react";
import Sidebar from '../../components/Layout/Sidebar';
import Loader from '../../components/Loader/Loader';
import Category from '../Category/Category';
import '../login/login.css';

function Home() {
       const [restloader, setrestLoader] = useState(true);
 useEffect(() => {
   setInterval(() => {
     setrestLoader(false);
   }, 4000);
 }, [restloader]);


    return restloader ? (
      <Loader />
    ) : (
      <>
        <Sidebar>Hello</Sidebar>
      </>
    );
}

export default Home
