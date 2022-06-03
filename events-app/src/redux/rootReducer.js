import { combineReducers } from "redux";

import shoppingReducer from "./EventsChart/events-reducer";

const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;
