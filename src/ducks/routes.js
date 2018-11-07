// routes.js
import { routesRef } from "../config/firebase";

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
  routesRef.on("value", snapshot => {
    dispatch({
      type: FETCH_ROUTES,
      payload: snapshot.val()
    });
  });
};

export const addRoute = newRoute => async dispatch => {
  routesRef.push().set(newRoute);
};
