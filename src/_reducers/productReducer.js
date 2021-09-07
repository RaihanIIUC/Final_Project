import { ActionType } from "../_ActionType";

const initialState = {
  product: [],
  error: [],
  loading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CATRGORY_INSERTED:
      return { ...state, product: action.payload };

    default:
      return state;
  }
};

export default productReducer;
