import { ActionType } from "../_ActionType";

 
const userState = {
  user : [],
  error : [],
  loggedIn : false,
  loader : true ,
 
};

 

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_USER_DATA:
      return { ...state, user: action.payload, loggedIn: true, loader: false };

    case ActionType.USER_SIGN_IN_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case ActionType.USER_SIGNOUT:
      return { ...state, user: [], loggedIn: false };
    default:
      return state;
  }
};

export default userReducer;
