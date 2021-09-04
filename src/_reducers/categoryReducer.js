import { ActionType } from "../_ActionType";

const initialState = {
  category : [],
  error: [],
  loading : false,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_USER_DATA:
      return { ...state, user: action.payload, loggedIn: true };

    case ActionType.USER_SIGN_IN_FAIL:
      return {
        error: action.payload,
      };
    case ActionType.USER_SIGNOUT:
      return { ...state, user: [], loggedIn: false };
    default:
      return state;
  }
};

export default categoryReducer;
