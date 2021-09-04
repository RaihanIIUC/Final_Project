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
export const setUserLogOut = () => {
  return {
    type: ActionType.USER_SIGNOUT,
  };
};

export const categoryInsertAction  = (category) => {
  return async (dispatch, action) => {
    try {
      const response = await axios.post("http://localhost:8080/category", {
        name: category.name,
        description: category.description,
      }, Auth.getToken() );

      dispatch(setCategoryData(response.data));
      localStorage.setItem("categoryInfo", JSON.stringify(response.data));
    } catch (error) {
      dispatch(setCategoryInsertError(error.response));
    }
  };
};

export const signOut = () => {
  return async (dispatch, action) => {
    dispatch(setUserLogOut());
    localStorage.removeItem("userInfo");
  };
};
