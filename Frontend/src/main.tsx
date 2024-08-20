import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/materialUI/mtUI.ts";
import { Auth0Provider } from "@auth0/auth0-react";
import { CookiesProvider } from "react-cookie";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: `${window.location.origin}/home`,
        audience: audience,
      }}
    >
      <ThemeProvider theme={theme}>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>
);
