import "../CSS/componentsCSS/sideBar.css";
import React from "react";
import { Home, Message, Search, Add, Favorite } from "@mui/icons-material";
import { Box } from "@mui/material";
import { sideBarContainerStyles } from "../theme/materialUI/mtUI";

const SideBar: React.FC = () => {
  return (
    <div className="sideBar">
      <Box sx={sideBarContainerStyles}>
        <Home />
        <Favorite />
        <Add />
        <Search />
        <Message />
      </Box>
      <h1 className="sideBarTitle">Home</h1>
      <p className="sideBarSubTitle">All books</p>
    </div>
  );
};

export default SideBar;
