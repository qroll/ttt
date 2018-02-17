import { combineReducers } from "redux";

import user from "./user";
import topics from "./topics";

const rootReducer = combineReducers({ user, topics });

export default rootReducer;
