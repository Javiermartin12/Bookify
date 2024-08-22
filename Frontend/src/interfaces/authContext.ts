import { User, LogoutOptions } from "@auth0/auth0-react";

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | undefined;
  loginWithRedirect: () => void;
  logout: (options?: LogoutOptions) => void;
}
