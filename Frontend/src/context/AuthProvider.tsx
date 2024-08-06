import React, { createContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useCookies } from "react-cookie";
import { AuthContextType } from "../interfaces/authContext";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  const [, setCookie, removeCookie] = useCookies(["authToken"]);

  useEffect(() => {
    if (isAuthenticated) {
      setCookie("authToken", "your-token", {
        path: "/",
        maxAge: 3600,
        secure: true,
        sameSite: "strict",
      });
    } else {
      removeCookie("authToken");
    }
  }, [isAuthenticated, setCookie, removeCookie]);
  const contextValue: AuthContextType = {
    isAuthenticated,
    user,
    loginWithRedirect,
    logout,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
