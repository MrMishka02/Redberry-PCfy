import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./assets/fonts/HelveticaNeue.ttc";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducer from "./reducers";

const store = createStore(allReducer);

// store.subscribe(() => console.log(store.getState()));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
