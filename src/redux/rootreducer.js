import { combineReducers } from "redux";
import reducer from "./userreducer";

const rootReducer = combineReducers(
  {
    user: reducer,
  }
);

export default rootReducer;