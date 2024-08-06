import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/materialUI/mtUI.ts";
import { Auth0Provider } from "@auth0/auth0-react";
import { CookiesProvider } from "react-cookie";
import { AuthProvider } from "./context/AuthProvider.tsx";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{ redirect_uri: `${window.location.origin}/home` }}
      >
        <CookiesProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </CookiesProvider>
      </Auth0Provider>
    </ThemeProvider>
  </React.StrictMode>
);
