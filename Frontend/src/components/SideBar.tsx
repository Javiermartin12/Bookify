import "../CSS/componentsCSS/sideBar.css";
import React from "react";
import { Home, Message, Search, Add, Book } from "@mui/icons-material";
import { Box } from "@mui/material";
import { sideBarContainerStyles } from "../theme/materialUI/mtUI";
import { Link } from "wouter";

const SideBar: React.FC = () => {
  return (
    <div className="sideBar">
      <Box sx={sideBarContainerStyles}>
        <Link href="/home">
          <Home />
        </Link>
        <Link href="/mybooks">
          <Book />
        </Link>
        <Link href="/createbook">
          <Add />
        </Link>
        <Search />
        <Link href="/chat">
          <Message />
        </Link>
      </Box>
      <h1 className="sideBarTitle">Home</h1>
      <p className="sideBarSubTitle">All books</p>
    </div>
  );
};

export default SideBar;
