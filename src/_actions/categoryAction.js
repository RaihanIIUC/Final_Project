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
      localStorage.setItem("categoryInfo", JSON.stringify(response.data));
    } catch (error) {
      dispatch(setCategoryInsertError(error.response));
    }
  };
};
 
