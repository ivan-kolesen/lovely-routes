import { SET_ROUTES, FETCH_ROUTES } from "../actions/types";

export default function routes(state = [], action) {
  switch (action.type) {
    case SET_ROUTES:
      return {
        ...state,
        allRoutes: action.allRoutes
      };
    case FETCH_ROUTES:
      return {
        ...state,
        allRoutes: action.allRoutes
      };
    default:
      return state;
  }
}
