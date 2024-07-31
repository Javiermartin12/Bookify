import { TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import {
  searchBarContainerStyles,
  searchBarStyles,
} from "../theme/materialUI/mtUI";

const SearchBar = () => {
  return (
    <div>
      <Box sx={searchBarContainerStyles}>
        <TextField
          variant="outlined"
          placeholder="Search book for you..."
          sx={searchBarStyles}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "aliceblue" }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </div>
  );
};

export default SearchBar;
