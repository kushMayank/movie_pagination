import {
  callfetchPopularMovieList,
  callfetchSearchMovieList
} from "./service.js";
import { SET_LOADING } from "./constant";

function setFetchPending(isLoading) {
  return {
    type: "SET_LOADING",
    isLoading
  };
}

function setMoviesData(data) {
  return {
    type: "SET_MOVIES_DATA",
    data
  };
}

function setSearchDate(data) {
  return {
    type: "SET_SEARCH_DATA",
    data
  };
}

export function fetchPopularMovieList(page) {
  return dispatch => {
    dispatch(setFetchPending(true));
    callfetchPopularMovieList(page, response => {
      if (response) {
        dispatch(setFetchPending(false));
        dispatch(setMoviesData(JSON.parse(response)));
      } else {
        dispatch(setFetchPending(false));
      }
    });
  };
}

export function fetchSearchMovieList(query) {
  return dispatch => {
    dispatch(setFetchPending(true));
    callfetchSearchMovieList(query, response => {
      if (response) {
        dispatch(setFetchPending(false));
        dispatch(setSearchDate(JSON.parse(response)));
      } else {
        dispatch(setFetchPending(false));
      }
    });
  };
}
