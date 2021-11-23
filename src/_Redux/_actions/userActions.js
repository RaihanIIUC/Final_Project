import axios from "axios";
import persistStore from "redux-persist/es/persistStore";
import localStorage from "redux-persist/es/storage";
import storage from "redux-persist/lib/storage";
import { ActionType } from "../_ActionType";
   import Swal from "sweetalert2";
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

export const setAllUserPayload = (users) => {
  return {
    type: ActionType.USERS_DATA,
    payload: users,
  };
};

export const signIn = (user ) => {
  return async (dispatch, action) => {
   const response = await axios.post("http://localhost:8080/signin", {
        email: user.email,
        password: user.password,
      });
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
     history.push('/');
    // document.location.reload();

   }
}



export const getAllUserAction = () => {
  return async (dispatch, getState) => {
    const { userStore } = getState();
    const { user } = userStore;
    const { userInfo } = user;
    const { token } = userInfo;
    const bearerToken = () => {
      return `bearer ${token}`;
    };
    try {
      const response = await axios.get("http://localhost:8080/user", {
        headers: {
          Authorization: bearerToken(),
        },
      });

      dispatch(setAllUserPayload(response.data));
    } catch (error) {
     console.log(error.response,NaN,'');
    }
  };
};


export const requestDeleteUser = (uid , user) => {
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
        `http://localhost:8080/user/${uid}`,
        {
          headers: {
            Authorization: bearerToken(),
          },
        }
      );
      dispatch(getAllUserAction());
      Swal.fire(`${user.email}`, `${user.username} Deleted`, "success");
    } catch (error) {
      console.log(error, null, " ");
      Swal.fire(`${error}`, `${user.email} Deleted failed`, "error");
    }
  };
};

 