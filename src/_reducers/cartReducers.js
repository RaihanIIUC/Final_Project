import { ActionType } from "../_ActionType";

const cartstate = {
 cart : [],
 cartList : [],
 };

const cartReducer = (state = cartstate, action) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return { ...state, cart: action.payload };
   case ActionType.CART_REQUEST_SUCCESS: 
      return { ...state, cartList: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
