import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
 import thunk from "redux-thunk";
import mainReducer from "../_reducers";
  import { persistStore } from "redux-persist";

const conosleEnhancher = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(mainReducer, conosleEnhancher);

export const persistor = persistStore(store);
