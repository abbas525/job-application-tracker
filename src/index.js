import React, { Suspense } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import "./assets/scss/style.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Loader from "./layouts/loader/Loader";
import { Provider } from "react-redux";
import store from "./store/store";
import { Auth0Provider } from "@auth0/auth0-react";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <Suspense fallback={<Loader />}>
    <Auth0Provider
      domain="dev-vc8o4ca36n5xjfiv.us.auth0.com"
      clientId="Ed1ZyML3rhneZk5AFsaLdcDpwcE2n2cH"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Auth0Provider>
  </Suspense>,

  // document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
