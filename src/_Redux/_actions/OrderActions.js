import axios from "axios";
import { ActionType } from "../_ActionType";
  import Swal from "sweetalert2";
 import { RouterPath } from "../_helpers/RoutePath";

export const setOrderData = (data) => ({
  type: ActionType.ORDER_REQUEST_SUCCESS,
  payload: data,
});

 
export const requestOrderList = () => {
  return async (dispatch, getState) => {
    const { userStore } = getState();
    const { user } = userStore;
    const { userInfo } = user;
    console.log(userInfo, NaN);
    const { token } = userInfo;
    const bearerToken = () => {
      return `bearer ${token}`;
    };
    try {
      const response = await axios.get(`${RouterPath.BASE_URL}/order`, {
        headers: {
          Authorization: bearerToken(),
        },
      });
      dispatch(setOrderData(response.data));
      console.log(response, NaN);
    } catch (err) {
      Swal.fire(`${err}`, `Request Order List Failed`, "error");
    }
  };
};
export const requestStatusChangeAction = (oid, status ) => {
  return async (dispatch, getState) => {
    const { userStore } = getState();
    const { user } = userStore;
    const { userInfo } = user;
    console.log(userInfo, NaN);
    const { token } = userInfo;
    const bearerToken = () => {
      return `bearer ${token}`;
    };
    try {
      const response = await axios.patch(
        `${RouterPath.BASE_URL}/order/${oid}`,
        {
          status: parseInt(status),
        },
        {
          headers: {
            Authorization: bearerToken(),
          },
        }
      );
      dispatch(requestOrderList());
       console.log(response, NaN);
    } catch (err) {
      Swal.fire(`${err}`, `Request Order List Failed`, "error");
    }
  };
};