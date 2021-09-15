import axios from "axios";
import { ActionType } from "../_ActionType";
import Auth from "../_helpers/auth";

export const setAddToCart = (product) => {
  return {
    type: ActionType.ADD_TO_CART,
    payload: product,
  };
};
 
export const setCartQuantityData = (data) => ({
  type: ActionType.CART_QUANTITY,
  payload: data,
});


export const requestAddToCartAction = (item, quantity) => {
  const id = item._id;
   return async (dispatch, action) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/cart",
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