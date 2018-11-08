import { CLOSE_WINDOW, OPEN_WINDOW } from "../actions/types";

let initialState = {
  isOpened: false
};

export default function popUpWindow(state = initialState, action) {
  switch (action.type) {
    case OPEN_WINDOW:
      return {
        ...state,
        isOpened: true
      };
    case CLOSE_WINDOW:
      return {
        ...state,
        isOpened: false
      };
    default:
      return state;
  }
}
