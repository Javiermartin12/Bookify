import "./CSS/App.css";
import React from "react";
import { PrivateRoute } from "./routes/PrivateRoutes.tsx";
import { Route } from "wouter";
import { Home } from "./pages/Home.tsx";
import { MyBooks } from "./pages/MyBooks.tsx";
import { Settings } from "./pages/Settings.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import { NewBook } from "./pages/NewBook.tsx";

const App: React.FC = () => {
  return (
    <>
      <div className="background">
        <div className="continerMain">
          <Route path="/" component={LoginPage} />
          <Route path="/home" component={Home} />
          <PrivateRoute path="/mybooks" component={MyBooks} />
          <PrivateRoute path="/settings" component={Settings} />
          <Route path="/new-book" component={NewBook} />
        </div>
      </div>
    </>
  );
};

export default App;
