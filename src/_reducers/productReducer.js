import { AcUnitTwoTone } from "@material-ui/icons";
import { ActionType } from "../_ActionType";

const initialState = {
  product: [],
  products : [],
  currentProduct : [],
  error: [],
  loading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.PRODUCT_ADD_SUCCESSFULLY:
      return { ...state, product: action.payload };
    case ActionType.PRODUCT_ADD_FAILED:
      return { ...state, error: action.payload };
    case ActionType.ALL_PRODUCT_GETTING_SUCCESS:
      return { ...state, products: action.payload };
    case ActionType.ALL_PRODUCT_GETTING_FAILED:
      return { ...state, error: action.payload };
    case ActionType.PRODUCT_DETAILS_SUCCESS:
      return { ...state, currentProduct: action.payload };
    case ActionType.PRODUCT_UPDATED_FAILED:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default productReducer;
