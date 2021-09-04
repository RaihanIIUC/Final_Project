import axios from "axios";
import { ActionType } from "../_ActionType";
 
export const setUserData = (user ) => {
  return {
    type: ActionType.UPDATE_USER_DATA,
    payload: user,
  };
};
export const setUserError = (error  , data_error) => {
  return {
    type: ActionType.USER_SIGN_IN_FAIL,
    payload: error ,
  };
};
export const setUserLogOut = ( ) => {
  return {
    type: ActionType.USER_SIGNOUT,
      };
};

export const signIn = (user ) => {
  return async (dispatch, action) => {
   try{
         const response = await axios.post("http://localhost:8080/signin", {
      email: user.email,
      password: user.password
    });
    dispatch(setUserData(response.data));
    localStorage.setItem("userInfo", JSON.stringify(response.data));
   
   }catch(error){
      dispatch(setUserError(error.response));
   }
  };

};


export const signOut = ( )=> {
  return async(dispatch, action) => {
    dispatch(setUserLogOut());
    localStorage.removeItem("userInfo");

  }
}