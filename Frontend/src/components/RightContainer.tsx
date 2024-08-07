import React from "react";
import "../CSS/componentsCSS/rightContainer.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { ContainerBooks } from "./ContainerBooks";

const RightContainer: React.FC = () => {
  return (
    <div className="rightContainer">
      <Header />
      <SearchBar />
      <ContainerBooks />
    </div>
  );
};

export default RightContainer;
