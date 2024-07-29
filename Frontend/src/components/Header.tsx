import React from "react";
import "../CSS/componentsCSS/header.css";
const Header: React.FC = () => {
  return (
    <div className="headerMain">
      <div className="headerContainer">
        <h2 className="headerTitle">Books</h2>
        <p className="booksExist"> Number of books exist</p>
      </div>
    </div>
  );
};
export default Header;
