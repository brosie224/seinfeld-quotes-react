import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import quotes from "./reducers/QuotesReducer";

const rootReducer = combineReducers({
  quotes
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
