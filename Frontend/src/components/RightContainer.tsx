import React from "react";
import "../CSS/componentsCSS/rightContainer.css";
import Header from "./Header";
import SearchBar from "./SearchBar";

const RightContainer: React.FC = () => {
  return (
    <div className="rightContainer">
      <Header />
      <SearchBar />
    </div>
  );
};

export default RightContainer;
