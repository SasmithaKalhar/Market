import { combineReducers } from "redux";

import auth from "./auth";
import showSearch from "./search";
import showHeader from "./header";

const reducers = combineReducers({ auth, showSearch, showHeader });

export default reducers;
