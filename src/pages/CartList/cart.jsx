import React, { useEffect, useState  } from "react";
import Sidebar from '../../components/Layout/Sidebar';
import Loader from '../../components/Loader/Loader';
 import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CartInsert from "./CartInsert";
import CartItem from "./CartItem";
 


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1), //grid padding
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function Cart() {
 
       const [restloader, setrestLoader] = useState(true);
 useEffect(() => {
   setInterval(() => {
     setrestLoader(false);
   }, 2000);
 }, []);


    return restloader ? (
      <Loader />
    ) : (
      <div>
        <Sidebar>
        <CartItem />
        </Sidebar>
      </div>
    );
}

export default Cart;





  