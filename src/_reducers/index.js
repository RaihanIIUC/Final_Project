import { combineReducers } from "redux";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from "./productReducer";
import { ActionType } from "../_ActionType";
import cartReducer from "./cartReducers";
import orderReducer from "./orderReducers";


const persistConfig = {
  key: "root",
  storage: storage,
};
    
const persistedUserInfo = persistReducer(persistConfig, userReducer);
const persistcategoryInfo = persistReducer(persistConfig, categoryReducer);
const persistProductInfo = persistReducer(persistConfig, productReducer);
const persistCartItems = persistReducer(persistConfig,cartReducer );
const persistOrderItems = persistReducer(persistConfig, orderReducer);

const mainReducer = combineReducers({
  userStore: persistedUserInfo,
  categoryStore: persistcategoryInfo,
  productStore: persistProductInfo,
  cartStore: persistCartItems,
  orderStore: persistOrderItems,
});
 


export default mainReducer;
