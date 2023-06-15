import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from "./App";
import store from "./redux/store";
import { productsFetch } from "./redux/slices/productSlice"

store.dispatch(productsFetch());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
