// routes.js

// Actions

export const SET_ROUTES = "lovely-routes/routes/SET_ROUTES";

// Reducers
export default function routes(state = {}, action) {
  switch (action.type) {
    case SET_ROUTES:
      return {
        ...state,
        allRoutes: action.allRoutes
      };
    default:
      return state;
  }
}

//Actions creators
export function setRoutes(data) {
  return {
    type: SET_ROUTES,
    allRoutes: data
  };
}
