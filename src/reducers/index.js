import { combineReducers } from "redux";

import routes from "./routes";
import searchBar from "./searchbar";
import popUpWindow from "./popupwindow";

export default combineReducers({
  routes,
  searchBar,
  popUpWindow
});
