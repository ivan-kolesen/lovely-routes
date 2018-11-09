import { routesRef } from "../config/firebase";
import { SET_ROUTES, OPEN_WINDOW, CLOSE_WINDOW, SET_VALUE } from "./types";

export function setRoutes(data) {
  return {
    type: SET_ROUTES,
    allRoutes: data
  };
}

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

export function setValue(value) {
  return {
    type: SET_VALUE,
    value: value
  };
}

export const addRoute = newRoute => async dispatch => {
  routesRef.push().set(newRoute);
};
