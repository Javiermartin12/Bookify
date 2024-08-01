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
const Header: React.FC = () => {
  return (
    <div className="headerMain">
      <div className="headerContainer">
        <Box sx={boxToRow}>
          <Box sx={boxToAvatar}></Box>
          <Typography sx={helloAvatarName}>Hello,...</Typography>
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
