import React, { useEffect, useState  } from "react";
import Sidebar from '../../components/Layout/Sidebar';
import Loader from '../../components/Loader/Loader';
 import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CartInsert from "./CartInsert";
import CartItem from "./CartItem";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { requestCheckOut } from "../../_actions/cartActions";
import { useHistory } from "react-router";



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
   const dispatch = useDispatch();
   const history = useHistory();
       const [restloader, setrestLoader] = useState(true);
 
       useEffect(() => {
   setInterval(() => {
     setrestLoader(false);
   }, 2000);
 }, []);


  const checkOutHandler = () => {
    dispatch(requestCheckOut());
    history.push('/');
    console.log('checkOut clicked');
  };

    return restloader ? (
      <Loader />
    ) : (
      <div>
        <Sidebar>
          <CartItem />
          <Button
            variant="contained"
            color="success"
            onClick={() => checkOutHandler()}
          >
         Checkout
          </Button>
        </Sidebar>
      </div>
    );
}

export default Cart;





  