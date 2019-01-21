import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bulma";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

const allReducers = combineReducers({
  // important -> combineReducers
  arr1: function(state = [], { type, payload }) {
    switch (type) {
      case "ARR1_PUSH":
        state.push(payload);

        return state;
      case "ARR1_RESET":
        return [];
      default:
        return state;
    }
  },
  cvTitle: function(state = "", { type, newText }) {
    return state;
  }
});

const store = createStore(
  allReducers,
  {
    /*
    // INITIALIZING, use allReducers index-names
    arr1: [
      {
        cell1: "init cell1!",
        cell2: "init cell2!"
      }
    ],
    string1: "Stored string"
*/
    cvTitle: "click for CV "
  },
  window.devToolsExtension && window.devToolsExtension()
);
/*
store.dispatch({
  // push in array with dispatch
  type: "ARR1_PUSH",
  payload: {
    cell1: "Dispatch push cell1",
    cell2: "Dispatch push cell2"
  }
});
*/
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
