import { routesRef } from "../config/firebase";
import {
  SET_ROUTES,
  OPEN_WINDOW,
  CLOSE_WINDOW,
  SET_VALUE,
  FETCH_ROUTES
} from "./types";

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

export const fetchRoutes = () => async dispatch => {
  routesRef.orderByChild("isFavorite").on("value", snapshot => {
    let newSnapshot = [];
    snapshot.forEach(item => {
      newSnapshot.push(Object.assign(item.val(), { id: item.key }));
    });
    newSnapshot.reverse();
    dispatch({
      type: FETCH_ROUTES,
      allRoutes: newSnapshot
    });
  });
};
