import "./CSS/App.css";
import React from "react";
import SideBar from "./components/SideBar.tsx";

import { Route } from "wouter";
import { Home } from "./pages/Home.tsx";
import { MyBooks } from "./pages/MyBooks.tsx";
import { CreateBooks } from "./pages/CreateBooks.tsx";
import { Chat } from "./pages/Chat.tsx";

const App: React.FC = () => {
  return (
    <>
      <div className="background">
        <div className="continerMain">
          <SideBar />
          <Route path="/" component={Home} />
          <Route path="/mybooks" component={MyBooks} />
          <Route path="/createbook" component={CreateBooks} />
          <Route path="/chat" component={Chat} />
        </div>
      </div>
    </>
  );
};

export default App;
