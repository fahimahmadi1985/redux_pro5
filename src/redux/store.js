import reducer from "./reduce";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger();
//CREATE STORE
const store = createStore(reducer, composeWithDevTools(applyMiddleware(ReduxThunk, logger)));

export default store;
