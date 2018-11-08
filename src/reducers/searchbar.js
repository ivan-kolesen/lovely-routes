import { SET_VALUE } from "../actions/types";

let initialState = {
  value: ""
};

export default function searchBar(state = initialState, action) {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        value: action.value
      };
    default:
      return state;
  }
}
