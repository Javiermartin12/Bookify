import "../CSS/componentsCSS/sideBar.css";
import React from "react";

const SideBar: React.FC = () => {
  return (
    <div className="sideBar">
      <h1 className="sideBarTitle">Home</h1>
      <p className="sideBarSubTitle">All books</p>
    </div>
  );
};

export default SideBar;
