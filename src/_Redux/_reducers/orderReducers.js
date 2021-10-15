import { Action } from "history";
import { ActionType } from "../_ActionType";

const orderstate = {
  data : [], 
};

const orderReducer = (state = orderstate, action) => {
  switch (action.type) {
    case ActionType.ORDER_REQUEST_SUCCESS:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default orderReducer;
