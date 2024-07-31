import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { sideBarContainerStyles } from "../theme/materialUI/mtUI";

const SearchBar = () => {
  return (
    <div>
      <TextField
        variant="outlined"
        placeholder="Search book for you..."
        sx={sideBarContainerStyles}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "aliceblue" }} />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
