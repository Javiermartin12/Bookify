import "./CSS/App.css";
import React from "react";
import SideBar from "./components/SideBar.tsx";
import RightContainer from "./components/RightContainer.tsx";

const App: React.FC = () => {
  return (
    <>
      <div className="background">
        <div className="continerMain">
          <SideBar />
          <RightContainer />
        </div>
      </div>
    </>
  );
};

export default App;
