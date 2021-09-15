import { ActionType } from "../_ActionType";

const initialState = {
 cartList : [],
 };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return { ...state, cartList: action.payload };
   
 
    default:
      return state;
  }
};

export default cartReducer;
