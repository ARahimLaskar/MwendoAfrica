import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        <Auth0Provider
          // domain="dev-salhti3s7rbnoty7.us.auth0.com"
          // clientId="mNrW6zqt14fCPP99K8qSClMlgjk0xvMl"
          domain="dev-ot7oo8jkvuwz3ll7.us.auth0.com"
          clientId="Ds09Qjxf2wcfjYwgXP9c9XxxiYNc681k"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
