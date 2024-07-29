import React from "react";
import "../CSS/componentsCSS/header.css";
import { Button } from "@mui/material";
const Header: React.FC = () => {
  return (
    <div className="headerMain">
      <div className="headerContainer">
        <h2 className="headerTitle">Books</h2>
        <p className="booksExist"> Number of books exist</p>
      </div>
      <div className="headerContainerRight">
        <Button
          variant="contained"
          sx={{
            background: "rgba(0, 0, 0, 0.2)",
            borderRadius: "0.5rem",
            marginTop: "0.5rem",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            height: "40%",
            width: "60%",
            "&:hover": {
              background: "rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          New book
        </Button>
      </div>
    </div>
  );
};
export default Header;
