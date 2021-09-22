import axios from "axios";
import { ActionType } from "../_ActionType";
import Auth from "../_helpers/auth";
 import Swal from "sweetalert2";

export const setCategoryData = (category) => {
  return {
    type: ActionType.CATRGORY_INSERTED,
    payload: category,
  };
};
export const setCategoryInsertError = (error) => {
  return {
    type: ActionType.CATEGORY_INSERT_FAIL,
    payload: error,
  };
};
export const setAllCategorySuccess = (Allcategory) => {
  return {
    type: ActionType.ALL_CATEGORY_GETTING_SUCCESS,
    payload: Allcategory,
  };
};
export const setAllCategoryFailed = (error) => {
  return {
    type: ActionType.ALL_CATEGORY_GETTING_SUCCESS,
    payload: error,
  };
};
 

export const categoryAddAction  = (category) => {
   return async (dispatch, getState) => {
     const { userStore } = getState();
     const { user } = userStore;
     const { userInfo } = user;
     const { token } = userInfo;  
      const bearerToken = () => {
       return `bearer ${token}`;
     };
     try {
       const response = await axios.post(
         "http://localhost:8080/category",
         {
           name: category.name,
           description: category.description,
           image: category.image,
         },
         {
           headers: {
             Authorization: bearerToken(),
           },
         }
       );

       dispatch(setCategoryData(response.data));
       Swal.fire("Good job!", `${category.name} added successfully`, "success");
     } catch (error) {
       dispatch(setCategoryInsertError(error.response));
       Swal.fire(`${error.response}`, `${category.name} added failed`, "error");
     }
   };
};
 

export const getAllCategoryAction  = ( ) => {
  return async (dispatch, getState) => {
    const { userStore } = getState();
    const { user } = userStore;
    const { userInfo } = user;
    const { token } = userInfo;  
    const bearerToken = () => {
      return `bearer ${token}`;
    };
    try {
      const response = await axios.get(
        "http://localhost:8080/category",
        {},
        {
          headers: {
            Authorization: bearerToken(),
          },
        }
      );

      dispatch(setAllCategorySuccess(response.data));
    } catch (error) {
      dispatch(setAllCategoryFailed(error.response));
    }
  };
};
 
export const requestDeleteCategory =(cid,category) =>{
 return async (dispatch, getState) => {
 const { userStore } = getState();
 const { user } = userStore;
 const { userInfo } = user;
 const { token } = userInfo;  
   const bearerToken = () => {
     return `bearer ${token}`;
   };
   try {
     const { data } = await axios.delete(
       `http://localhost:8080/category/${cid}`,
       {
         headers: {
           Authorization:  bearerToken(),
         },
       }
     );
     dispatch(getAllCategoryAction());
     Swal.fire(`${category.name}`, `${category.name} Deleted`, "success");
   } catch (error) {
     console.log(error, null, " ");
     Swal.fire(`${error}`, `${category.name} Deleted failed`, "error");
   }
 };
}
