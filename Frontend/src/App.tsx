import "./CSS/App.css";
import React from "react";

import { Route } from "wouter";
import { Home } from "./pages/Home.tsx";
import { MyBooks } from "./pages/MyBooks.tsx";
import { CreateBooks } from "./pages/CreateBooks.tsx";
import { Chat } from "./pages/Chat.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import { NewBook } from "./pages/NewBook.tsx";

const App: React.FC = () => {
  return (
    <>
      <div className="background">
        <div className="continerMain">
          <Route path="/" component={LoginPage} />
          <Route path="/home" component={Home} />
          <Route path="/mybooks" component={MyBooks} />
          <Route path="/createbook" component={CreateBooks} />
          <Route path="/chat" component={Chat} />
          <Route path="/new-book" component={NewBook} />
        </div>
      </div>
    </>
  );
};

export default App;
