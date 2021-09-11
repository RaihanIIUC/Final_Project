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

export const productAddAction = (product  ) => {
  return async (dispatch, action) => {
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




export const getAllProductAction = () => {
  return async (dispatch, action) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/products",
        {},
        {
          headers: {
            Authorization: Auth.getToken(),
          },
        }
      );

      dispatch(setAllProductSuccess(response.data));
    } catch (error) {
      dispatch(setAllProductFailed(error.response));
    }
  };
};