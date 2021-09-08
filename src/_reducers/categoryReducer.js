import { ActionType } from "../_ActionType";

const initialState = {
  category : [],
  error: [],
  loading : false,
  categorys  : [],
  
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CATRGORY_INSERTED:
      return { ...state, category : action.payload  };
 
    case ActionType.ALL_CATEGORY_GETTING_SUCCESS:
      return { ...state, categorys: action.payload };
 
    case ActionType.ALL_CATEGORY_GETTING_FAILED:
      return { ...state, error  : action.payload  };
 
       default:
      return state;
  }
};

export default categoryReducer;
