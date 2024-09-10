import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/edu-vic-wa-nt-beginner";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
