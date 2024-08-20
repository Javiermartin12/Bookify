import "../CSS/componentsCSS/sideBar.css";
import React from "react";
import { Home, Message, Search, Add, Book } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { sideBarContainerStyles } from "../theme/materialUI/mtUI";
import { Link } from "wouter";
import LogoutButton from "./subComponents/LogoutButton";
import { myBooksTypogr } from "../theme/materialUI/sideBar";
const SideBar: React.FC = () => {
  return (
    <div className="sideBar">
      <Box sx={sideBarContainerStyles}>
        <Link href="/home">
          <Home />
        </Link>
        <Link href="/my-books">
          <Book />
        </Link>
        <Link href="/new-book">
          <Add />
        </Link>
        <Search />
        <Link href="/chat">
          <Message />
        </Link>
      </Box>
      <h1 className="sideBarTitle">Home</h1>
      <Link href="/home">
        <p className="sideBarSubTitle">All books</p>
      </Link>
      <Link href="/my-books">
        <Typography sx={myBooksTypogr}>My books</Typography>
      </Link>
      <LogoutButton />
    </div>
  );
};

export default SideBar;
