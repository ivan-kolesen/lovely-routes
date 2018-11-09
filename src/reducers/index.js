import { combineReducers } from "redux";

import routes from "./routes";
import searchBar from "./searchbar";
import popUpWindow from "./popupwindow";
import selectedRoute from "./selectedroute";

export default combineReducers({
  routes,
  searchBar,
  popUpWindow,
  selectedRoute
});
