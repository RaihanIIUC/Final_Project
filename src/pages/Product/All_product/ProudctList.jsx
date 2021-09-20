import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
 import axios from "axios";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
  import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllProductAction } from "../../../_actions/productAction";
import Loader from "../../../components/Loader/Loader";
import Sidebar from "../../../components/Layout/Sidebar";
import {
  requestAddToCartAction,
  setCartQuantityData,
} from "../../../_actions/cartActions";
import Auth from "../../../_helpers/auth";
import { signOut } from "../../../_actions/userActions";
import Home from "../../Home/Home";
import "./product.scss";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

export const ShirtWrapper = styled(Grid)`
  img {
    height: 100px;
    width: auto;
    max-width: 100%;
    background-color: red;
  }
  p {
    font-size: 12px;
    text-align: center;
    padding: 10px 0;
    margin: 0;
    &.description {
      font-size: 8px;
      background-color: green;
    }
  }
  button {
    width: 100%;
    background-color: red;
    border-color: green;
    color: blue;
    &.material-button {
      background-color: #cdcdcd;
    }
  }
`;

const Buttn = styled.button``;
const ProudctList = () => {
    const dispatch = useDispatch();
  const [isFound, setIsFound] = useState(false);
  const { products  } = useSelector((store) => store.productStore);
   const { itemNumber } = useSelector((store) => store.cartStore);
  
  const history = useHistory();
  const [restloader, setrestLoader] = useState(true);
  

  useEffect(() => {
    

    dispatch(getAllProductAction());
    setInterval(() => {
      setrestLoader(false);
    }, 2000);
  }, []);
 
  useEffect(() => {
    if (products.length) {
      setIsFound(true);
    }
  }, [isFound]);

  // const handleCartClick =(item) => {
  //   dispatch(requestaddToCartAction(item));
  //  }

  const handleCartAdd = (product) => {
     const cartValue = itemNumber + 1;
   dispatch(setCartQuantityData(cartValue));
    const quantity = 1; 
 dispatch(requestAddToCartAction(product , quantity));
  
  };

  return restloader ? (
    <Loader />
  ) : (
    <Home>
      {!isFound && <p>No Shirt Found</p>}
      <div class="card__collection clear-fix">
        {!isFound && <p>No Shirt Found</p>}

        {products.map((product, index) => (
          <div class="cards cards--two">
            <img
              src={`http://localhost:8080${product?.image}`}
              class="img-responsive"
              alt="Cards Image"
            />
            <span class="cards--two__rect"></span>
            <span class="cards--two__tri"></span>
            <p key={index}>{product.title} </p>
            <ul class="cards__list">
              <li>
                <h4>Price : ${product.price} </h4>
              </li>
              <li></li>
              <li>
                <h4 onClick={() => handleCartAdd(product)}>
                  <AddShoppingCartOutlinedIcon
                    style={{ fontSize: 30, noPointer }}
                  />
                </h4>
              </li>
            </ul>
          </div>
        ))}
      </div>
     
    </Home>
  );
};

const noPointer = { cursor: "default" };


export default ProudctList;
 