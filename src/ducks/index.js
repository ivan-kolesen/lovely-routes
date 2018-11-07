import { combineReducers } from "redux";
import popUpWindow from "./popupwindow";
import routes from "./routes";
import searchBar from "./searchbar";

const reducers = {
  popUpWindow: popUpWindow,
  routes: routes,
  searchBar: searchBar
};

export default combineReducers(reducers);
