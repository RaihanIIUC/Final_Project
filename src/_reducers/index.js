import { combineReducers } from "redux";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";

    
const mainReducer = combineReducers({
  userStore: userReducer,
  categoryStore: categoryReducer,
});

export default mainReducer;
