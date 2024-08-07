import React from "react";
import "../CSS/componentsCSS/header.css";
import { Box, Button, Typography } from "@mui/material";
import { filterListIcon, headerButtonStyles } from "../theme/materialUI/mtUI";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  boxToAvatar,
  boxToRow,
  helloAvatarName,
} from "../theme/materialUI/header";
import { useAuth0 } from "@auth0/auth0-react";

const Header: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="headerMain">
      <div className="headerContainer">
        <Box sx={boxToRow}>
          <Box sx={boxToAvatar}></Box>
          {isAuthenticated && (
            <Typography sx={helloAvatarName}>Hello, {user?.name}</Typography>
          )}
        </Box>
        <h2 className="headerTitle">Books</h2>
        <p className="booksExist"> Number of books exist</p>
      </div>
      <div className="headerContainerRight">
        <FilterListIcon sx={filterListIcon} />
        <Button variant="contained" sx={headerButtonStyles}>
          New book
        </Button>
      </div>
    </div>
  );
};
export default Header;
