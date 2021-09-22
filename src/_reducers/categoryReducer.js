import { ActionType } from "../_ActionType";

const catState = {
  category: [],
  error: [],
  loading: false,
  categorys: [],
  categories : []
};

const categoryReducer = (state = catState, action) => {
  switch (action.type) {
    case ActionType.CATRGORY_INSERTED:
      return { ...state, category: action.payload };

    case ActionType.ALL_CATEGORY_GETTING_SUCCESS:
      return { ...state, categories: action.payload };

    case ActionType.ALL_CATEGORY_GETTING_FAILED:
      return { ...state, error: action.payload };

    case ActionType.CATEGORY_BY_ID_SUCCESS:
      return { ...state, category: action.payload };

    default:
      return state;
  }
};

export default categoryReducer;
