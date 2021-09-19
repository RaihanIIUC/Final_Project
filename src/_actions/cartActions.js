import axios from "axios";
import { ActionType } from "../_ActionType";
import Auth from "../_helpers/auth";
import { RouterPath } from "../_helpers/RoutePath";

export const setAddToCart = (data) => ({
  type: ActionType.ADD_TO_CART,
  payload: data.products,
});
 export const setCart = (data) => ({
   type: ActionType.CART_REQUEST_SUCCESS,
   payload: data.products,
 });

 
export const setCartQuantityData = (data) => ({
  type: ActionType.CART_QUANTITY,
  payload: data,
});


export const requestAddToCartAction = (item, quantity) => {
  const id = item._id;
   return async (dispatch, action) => {
    try {
      const response = await axios.post(
        `${RouterPath.BASE_URL}/cart`,
        {
          product: {
            id: id,
            quantity: parseInt(quantity, 10),
          },
        },
        {
          headers: {
            Authorization: Auth.getToken(),
          },
        }
      );
      dispatch(setAddToCart(response.data));
      console.log(response.data,null, '');

    } catch (error) {
      console.log(error, null,' ');
    }
 
  };
};


export const requestCart = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get("http://localhost:8080/cart", {
        headers: {
          Authorization: Auth.getToken(),
        },
      });
      dispatch(setCart(response.data));
      console.log(response.data, null, ' ');
 
    } catch (err) {
      console.error(err, null, ' ');
    }
  };
};
