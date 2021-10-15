import axios from "axios";
import { ActionType } from "../_ActionType";
import Auth from "../_Redux/_helpers/auth";
 import Swal from "sweetalert2";
import { RouterPath } from "../_Redux/_helpers/RoutePath";
import { history } from "../_Redux/_helpers/history";

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
    type: ActionType.ALL_PRODUCT_GETTING_FAILED,
    payload: error,
  };
};
export const setCategoryByIdSuccess = (category) => {
  return {
    type: ActionType.CATEGORY_BY_ID_SUCCESS,
    payload: category,
  };
};
export const setCategoryByIdFailed = (error) => {
  return {
    type: ActionType.CATEGORY_BY_ID_FAILED,
    payload: error,
  };
};
 export const setUpdatedCategory = (category) => {
   return {
     type: ActionType.CATRGORY_UPDATED,
     payload: category,
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

export const getCategoryByIdAction  = (cat) => {
  
  return async (dispatch, getState) => {
    const _id = cat.id;
    console.log(_id,null);
    const { userStore } = getState();
    const { user } = userStore;
    const { userInfo } = user;
    const { token } = userInfo; 
    if(!token && !userInfo ) { history.push('/')} 
    const bearerToken = () => {
      return `bearer ${token}`;
    };
    try {
      const response = await axios.get(
        `${RouterPath.BASE_URL}/category/${_id}`,
        {
          headers: {
            Authorization: bearerToken(),
          },
        }
      );

      dispatch(setCategoryByIdSuccess(response.data));
      console.log(response.data,NaN,'id');
    } catch (error) {
      dispatch(setCategoryByIdFailed(error.response));
      console.log(error.response,NaN,'error id');
    }
  };
};


export const editCategoryAction = (category) => {
  return async (dispatch, getState) => {
    const { userStore } = getState();
    const { user } = userStore;
    const { userInfo } = user;
    const { token } = userInfo;
    const bearerToken = () => {
      return `bearer ${token}`;
    };
    try {
      const response = await axios.patch(
        `${RouterPath.BASE_URL}/category/${category._id}`,
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

      dispatch(getAllCategoryAction());
      dispatch(setUpdatedCategory(response.data));
      //  history.push(`${RouterPath.CATEGORY_LIST_PAGE}`);
     
      Swal.fire("Good job!", `${category.name} Updated successfully`, "success");
     } catch (error) {
      // dispatch(setCategoryInsertError(error.response));
      Swal.fire(`${error.response}`, `${category.name} updated failed`, "error");
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
