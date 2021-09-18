import axios from "axios";
import { ActionType } from "../_ActionType";
import Auth from "../_helpers/auth";

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
  return async (dispatch, action) => {
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
            Authorization: Auth.getToken(),
          },
        }
      );

      dispatch(setCategoryData(response.data));
     } catch (error) {
      dispatch(setCategoryInsertError(error.response));
    }
  };
};
 

export const getAllCategoryAction  = ( ) => {
  return async (dispatch, action) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/category",{},
        {
          headers: {
            Authorization: Auth.getToken(),
          },
        }
      );
    
      dispatch(setAllCategorySuccess(response.data));
 
     } catch (error) {
      dispatch(setAllCategoryFailed(error.response));
  
    }
  };
};
 
