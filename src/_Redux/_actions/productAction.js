import axios from "axios";
import Swal from "sweetalert2";
import { ActionType } from "../_ActionType";
import Auth from "../_Redux/_helpers/auth";
import { history } from "../_Redux/_helpers/history";
 
export const setProductData = (category) => {
  return {
    type: ActionType.PRODUCT_ADD_SUCCESSFULLY,
    payload: category,
  };
};
export const setProudctInsertError = (error) => {
  return {
    type: ActionType.PRODUCT_ADD_FAILED,
    payload: error,
  };
};

export const setAllProductSuccess = (products) => {
  return {
    type: ActionType.ALL_PRODUCT_GETTING_SUCCESS,
    payload: products,
  };
};
export const setAllProductFailed = (error) => {
  return {
    type: ActionType.ALL_PRODUCT_GETTING_FAILED,
    payload: error,
  };
};

//detail Product 
export const setCurrentProductSuccess = (product) => {
  return {
    type: ActionType.PRODUCT_DETAILS_SUCCESS,
    payload: product,
  };
};
export const setCurrentProductFailed = (error) => {
  return {
    type: ActionType.PRODUCT_DETAILS_FAILED,
    payload: error,
  };
};


export const productAddAction = (product  ) => {
 return async (dispatch, getState) => {
 const { userStore } = getState();
 const { user } = userStore;
 const { userInfo } = user;
 const { token } = userInfo;  

   if (!token) {
          Swal.fire(`Please Login first`, "Product add Failed", "error");

     history.push("/");
   }
   const bearerToken = () => {
     return `bearer ${token}`;
   };
   try {
     const response = await axios.post(
       "http://localhost:8080/products",
       {
         title: product.title,
         price: parseInt(product.price, 10),
         description: product.description,
         image: product.image,
         stock: product.stock,
         category: {
           _id: product.category._id,
         },
       },
       {
         headers: {
           Authorization: bearerToken(),
         },
       }
     );
     dispatch(setProductData(response.data));
     Swal.fire("Good job!", `${product.title} Added Successfully`, "success");
   } catch (error) {
     dispatch(setProudctInsertError(error.response));
     Swal.fire(`${error.response}`, "Product add Failed", "error");
   }
 };
 };




export const getAllProductAction = () => {
 return async (dispatch, getState) => {
 const { userStore } = getState();
 const { user } = userStore;
 const { userInfo } = user;

   
 const { token } = userInfo;  
 
 const bearerToken = () => {
     return `bearer ${token}`;
   };
   try {
     const response = await axios.get("http://localhost:8080/products", {
       headers: {
         Authorization: bearerToken(),
       },
     });

     dispatch(setAllProductSuccess(response.data));
   } catch (error) {
     dispatch(setAllProductFailed(error.response));
   }
 };
};
export const requestProductDetails = (pid) => {
 return async (dispatch, getState) => {
    const { userStore } = getState();
    const { user } = userStore;
    const { userInfo } = user;
    const { token } = userInfo;  
   const bearerToken = () => {
     return `bearer ${token}`;
   };
   try {
     const response = await axios.get(`http://localhost:8080/products/${pid}`);

     dispatch(setCurrentProductSuccess(response.data));
     Swal.fire("Good job!", `product  getting success`, "success");
   } catch (error) {
     dispatch(setCurrentProductFailed(error.response));
     Swal.fire("Failed", `product  getting Failed`, "error");
   }
 };
};