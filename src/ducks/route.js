// routes.js

// Actions
import { routesRef } from "../config/firebase";

export const SELECT_ROUTE = "lovely-routes/routes/SELECT_ROUTES";

const initialState = {
  id: 0
};

// Reducers
export default function selectedRoute(state = initialState, action) {
  switch (action.type) {
    case SELECT_ROUTE:
      return {
        ...state,
        id: action.id
      };
    default:
      return state;
  }
}

//Actions creators
export const selectRoute = id => {
  return {
    type: SELECT_ROUTE,
    id: id
  };
};

export const likeRoute = (id, newValue) => async dispatch => {
  routesRef.child(id).update({ isFavorite: newValue });
};
