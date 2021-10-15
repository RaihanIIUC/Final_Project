import axios from "axios";
import { ActionType } from "../_ActionType";
import Auth from "../_Redux/_helpers/auth";
import { RouterPath } from "../_Redux/_helpers/RoutePath";
 import Swal from "sweetalert2";
import { history } from "../_Redux/_helpers/history";

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
 
export const setCheckOut = (checkout) => ({
  type: ActionType.CART_CHECKOUT,
  payload: checkout,
});



export const requestAddToCartAction = (item, quantity, firstAdd) => {
    const id = item._id;
   return async (dispatch, getState) => {
   const { userStore } = getState();
   const { user } = userStore;
   const { userInfo } = user;
   const { token } = userInfo; 
      const bearerToken =() => { return `bearer ${token}`;};
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
             Authorization: bearerToken(),
           },
         }
       );

       dispatch(setAddToCart(response.data));
        dispatch(requestCart());
       if (quantity < 2 && firstAdd) {
         Swal.fire({
           title: `${item.title}`,
           text: `${item.title} Added to Cart`,
           imageUrl: `http://localhost:8080${item?.image}`,
           imageWidth: 400,
           imageHeight: 200,
           imageAlt: "Custom image",
         });
       }
       if (quantity < 1) {
         Swal.fire({
           title: `${item.title}`,
           text: `${item.title} Deleted from  Cart`,
           imageUrl: `http://localhost:8080${item?.image}`,
           imageWidth: 400,
           imageHeight: 200,
           imageAlt: "Custom image",
         });
       }
     } catch (error) {
        Swal.fire(`${error}`, "Add to Cart Failed", "error");
     }
   };
};


export const requestCart = () => {
  return async (dispatch, getState) => {
    const { userStore} = getState();
    const { user } = userStore;
    const { userInfo } = user;
    console.log(userInfo,NaN);
    const { token } = userInfo;    
      const bearerToken = () => {
       return `bearer ${token}`;
     };
     try {
      const response = await axios.get("http://localhost:8080/cart",{
        headers: {
          Authorization: bearerToken(),
        },
      });
      dispatch(setCart(response.data));
 
    }catch (err) {
         Swal.fire(`${err}`, `Request Cart Failed`, "error");
    }
  };
};
 

export const requestCheckOut = () => {
  return async (dispatch, getState) => {
      const { userStore } = getState();
      const { user } = userStore;
      const { userInfo } = user;
      const { token } = userInfo;  
      console.log(token);
      const bearerToken = () => {
       return `bearer ${token}`;
     };
   
  try{
      const { data } = await axios.get(`${RouterPath.BASE_URL}/order/checkout`, {
      headers: {
        authorization: bearerToken(),
      },
    });
    history.push(`${RouterPath.PRODUCTS}`);
    dispatch(setCheckOut(data));
           Swal.fire(
             "Good job!",
             `Order CheckedOut successfully`,
             "success"
           );
     window.location.reload();

  }catch(error){
      Swal.fire(`${error}`, `Order CheckedOut failed`, "error");
  }

   };
};
