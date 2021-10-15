import React, { useEffect, useState  } from "react";
import Sidebar from '../../components/Layout/Sidebar';
import Loader from '../../components/Loader/Loader';
 import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
  import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { requestCheckOut } from "../../_Redux/_actions/cartActions";
import { useHistory } from "react-router";
import OrderItem from "./OrderItem";



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


function Order() {
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
          <OrderItem />
          
        </Sidebar>
      </div>
    );
}

export default Order;





  