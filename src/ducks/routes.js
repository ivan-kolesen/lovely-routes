// routes.js
import { routesRef } from "../config/firebase";
import reverse from "reverse-object-order";

// Actions
export const FETCH_ROUTES = "lovely-routes/routes/FETCH_ROUTES";

// Reducers
export function routes(state = {}, action) {
  switch (action.type) {
    case FETCH_ROUTES:
      return action.payload;
    default:
      return state;
  }
}

//Actions creators
export const fetchRoutes = () => async dispatch => {
  routesRef.orderByChild("isFavorite").on("value", snapshot => {
    let newSnapshot = {};
    snapshot.forEach(item => {
      Object.assign(newSnapshot, { [item.key]: item.val() });
    });
    dispatch({
      type: FETCH_ROUTES,
      payload: reverse(newSnapshot)
    });
  });
};

export const addRoute = newRoute => async dispatch => {
  routesRef.push().set(newRoute);
};
