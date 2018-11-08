import { combineReducers } from "redux";
import popUpWindow from "./popupwindow";
import { routes } from "./routes";
import searchBar from "./searchbar";
import selectedRoute from "./route";

const reducers = {
  popUpWindow: popUpWindow,
  routes: routes,
  selectedRoute: selectedRoute,
  searchBar: searchBar
};

export default combineReducers(reducers);
