import "./CSS/App.css";
import React from "react";
import SideBar from "./components/SideBar.tsx";
const App: React.FC = () => {
  return (
    <>
      <div className="background">
        <div className="continerMain">
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default App;
