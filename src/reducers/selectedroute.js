import { SELECT_ROUTE } from "../actions/types";

let initialState = {
  id: ""
};

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
