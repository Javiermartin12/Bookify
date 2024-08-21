import React from "react";
import "../CSS/componentsCSS/header.css";
import { Box, Button, Typography, Avatar } from "@mui/material";

import {
  boxToAvatar,
  boxToRow,
  helloAvatarName,
  logOut,
} from "../theme/materialUI/header";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "wouter";
import LogoutButton from "./subComponents/LogoutButton";
import { headerButtonStyles } from "../theme/materialUI/mtUI";

const Header: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return;
  }

  return (
    <div className="headerMain">
      <div className="headerContainer">
        <Box sx={boxToRow}>
          {isAuthenticated && user && (
            <>
              <Avatar sx={boxToAvatar}>{user.name?.charAt(0)}</Avatar>
              <Typography sx={helloAvatarName}>Hello, {user?.name}</Typography>
            </>
          )}
        </Box>
        <h2 className="headerTitle">Books</h2>
        <p className="booksExist"> Number of books exist</p>
      </div>
      <div className="headerContainerRight">
        <Box sx={logOut}>
          <LogoutButton />
        </Box>
        <Link href="/new-book">
          <Button variant="contained" sx={headerButtonStyles}>
            New book
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Header;
