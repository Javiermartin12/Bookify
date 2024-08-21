import "../CSS/componentsCSS/sideBar.css";
import React from "react";
import { Home, Search, Add, Book } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";

import { Box, Typography } from "@mui/material";
import { sideBarContainerStyles } from "../theme/materialUI/mtUI";
import { Link } from "wouter";
import LogoutButton from "./subComponents/LogoutButton";
import { myBooksTypogr, styleLogoutBox } from "../theme/materialUI/sideBar";
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
        <Link href="/home">
          <SettingsIcon />
        </Link>
      </Box>
      <h1 className="sideBarTitle">Home</h1>
      <Typography sx={myBooksTypogr}>
        <Link href="/home" style={{ textDecoration: "none", color: "inherit" }}>
          All books
        </Link>
      </Typography>
      <Link
        href="/my-books"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Typography sx={myBooksTypogr}>My books</Typography>
      </Link>
      <Box sx={styleLogoutBox}>
        <LogoutButton />
      </Box>
    </div>
  );
};

export default SideBar;
