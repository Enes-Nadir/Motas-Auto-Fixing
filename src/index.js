import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <HelmetProvider>
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,  
  </HelmetProvider>
  </>
);

reportWebVitals();
