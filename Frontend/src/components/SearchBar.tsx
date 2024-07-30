import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { searchBarStyle } from "../theme/materialUI/searchBar";

const SearchBar = () => {
  return (
    <div>
      <TextField
        variant="outlined"
        placeholder="Search book for you..."
        sx={searchBarStyle}
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
