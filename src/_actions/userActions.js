import axios from "axios";
import localStorage from "redux-persist/es/storage";
import { ActionType } from "../_ActionType";
import { history } from "../_helpers/history";

export const setUserData = (user) => {
  return {
    type: ActionType.UPDATE_USER_DATA,
    payload: user,
  };
};
export const setUserError = (error) => {
  return {
    type: ActionType.USER_SIGN_IN_FAIL,
    payload: error,
  };
};
export const setUserLogOut = () => {
  return {
    type: ActionType.USER_SIGNOUT,
  };
};



export const signIn = (user ) => {
  return async (dispatch, action) => {
   const response = await axios.post("http://localhost:8080/signin", {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      const {message ,userInfo   } = response.data;
       if(userInfo && message){
       dispatch(setUserData(response.data));
      }else{
      dispatch(setUserError(message));
      }
  }
};

export const signOut = () => {
  return async (dispatch, action) => {
    dispatch(setUserLogOut());
    localStorage.removeItem("userInfo");
    history.push('/');
     document.location.reload();
   }
}