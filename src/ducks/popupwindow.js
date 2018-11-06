// popupwindow.js

// Actions
export const OPEN_WINDOW = "lovely-routes/popupwindow/OPEN_WINDOW";
export const CLOSE_WINDOW = "lovely-routes/popupwindow/CLOSE_WINDOW";

let initialState = {
  isOpened: false
};

// Reducers
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

//Actions creators
export function openPopUpWindow() {
  return {
    type: OPEN_WINDOW
  };
}

export function closePopUpWindow() {
  return {
    type: CLOSE_WINDOW
  };
}
