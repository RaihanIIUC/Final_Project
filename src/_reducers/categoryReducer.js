import { ActionType } from "../_ActionType";

const initialState = {
  category : [],
  error: [],
  loading : false,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CATRGORY_INSERTED:
      return { ...state, category : action.payload  };
 
       default:
      return state;
  }
};

export default categoryReducer;
