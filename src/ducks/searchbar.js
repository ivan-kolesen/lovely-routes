// searchbar.js

// Actions
export const SET_VALUE = "lovely-routes/input/SET_VALUE";

let initialState = {
  value: ""
};

// Reducers
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

//Actions creators
export function setValue(value) {
  return {
    type: SET_VALUE,
    value: value
  };
}
