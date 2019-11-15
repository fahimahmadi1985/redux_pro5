import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import axios from "axios";
import ReduxThunk from "redux-thunk";

//ACTION TYPES
const actionsType = {
  loading: "LOADING",
  success: "SUCCESS",
  failure: "FAILURE"
};

//DEFINE INITIAL STATE
const initialState = {
  pics: [],
  error: "",
  loading: false
};

//DEFINE ACTIONS
const loadingAction = () => {
  return {
    type: actionsType.loading
  };
};

const successAction = pics => {
  return {
    type: actionsType.success,
    payload: pics
  };
};

const failureAction = error => {
  return {
    type: actionsType.failure,
    payload: error
  };
};

//DEFINE REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.loading:
      return (state = { loading: true });
    case actionsType.success:
      return (state = { loading: false, pics: action.payload });
    case actionsType.failure:
      return (state = { loading: false, error: action.payload });
    default:
      return state;
  }
};

//FETCH DATA FROM API
const getPictures = term => {
  return dispatch => {
    dispatch(loadingAction());
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term || "football",
          page: 1,
          per_page: 20
        },
        headers: {
          Authorization:
            "Client-ID a5aadbbf4877dad65ca06fdb284a01cad2b2c117fc746d5c0dfef2009c719cac"
        }
      })
      .then(response => {
        //pass to success action paylod
        console.log("inside response");
        dispatch(successAction(response.data.results));
      })
      .catch(error => {
        //pass to failure action payload
        dispatch(failureAction(error));
      });
  };
};

const logger = createLogger();
//CREATE STORE
const store = createStore(reducer, applyMiddleware(ReduxThunk, logger));

store.dispatch(getPictures());
const rootElement = document.getElementById("root");
const render = () => {
  let data = store.getState().pics;
  console.log(data);
  ReactDOM.render(<App pics={data} getPics={getPictures} />, rootElement);
};

store.subscribe(render);
