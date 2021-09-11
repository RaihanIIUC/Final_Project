import { combineReducers } from "redux";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from "./productReducer";


const persistConfig = {
  key: "root",
  storage: storage,
};
    
const persistedUserInfo = persistReducer(persistConfig, userReducer);
const persistcategoryInfo = persistReducer(persistConfig, categoryReducer);
const persistProductInfo = persistReducer(persistConfig, productReducer);

const initialState = appReducer({}, {});

const mainReducer = combineReducers({
  userStore: persistedUserInfo,
  categoryStore: persistcategoryInfo,
  productStore : persistProductInfo
});

const rootReducer = (state, action )=> {
  if(ActionType.)
}

export default mainReducer;
