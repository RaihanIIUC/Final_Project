import axios from "axios";
import { ActionType } from "../_ActionType";
import Auth from "../_helpers/auth";

export const setProductData = (category) => {
  return {
    type: ActionType.PRODUCT_ADD_SUCCESSFULLY,
    payload: category,
  };
};
export const setProudctInsertError = (error) => {
  return {
    type: ActionType.PRODUCT_UPDATED_FAILED,
    payload: error,
  };
};

export const productAddAction = (product ,category ) => {
  return async (dispatch, action) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/products",
        {
          title: product.title,
          price: product.price,
          description: product.description,
           image: product.image,
           stock : product.stock,
           category : {
               _id : category.id
           }
        },
        {
          headers: {
            Authorization: Auth.getToken(),
          },
        }
      );
      dispatch(setProductData(response.data));
      localStorage.setItem("productInfo", JSON.stringify(response.data));
    } catch (error) {
      dispatch(setProudctInsertError(error.response));
    }
  };
};
