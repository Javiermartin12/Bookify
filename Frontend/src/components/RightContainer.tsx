import React from "react";
import "../CSS/componentsCSS/rightContainer.css";
import Header from "./Header";
import { ContainerBooks } from "./ContainerBooks";

const RightContainer: React.FC = () => {
  return (
    <div className="rightContainer">
      <Header />
      <ContainerBooks />
    </div>
  );
};

export default RightContainer;
