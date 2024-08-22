import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, useLocation } from "wouter";

export const PrivateRoute: React.FC<{
  path: string;
  component: React.ComponentType;
}> = ({ path, component: Component }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const [, setLocation] = useLocation();

  if (isLoading) {
    return <div>Conecting...</div>;
  }
  if (!isAuthenticated) {
    setLocation("/");
    return null;
  }

  return (
    <Route path={path}>
      <Component />
    </Route>
  );
};
