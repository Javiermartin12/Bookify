import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div>
      <TextField
        variant="outlined"
        placeholder="Search book for you..."
        sx={{
          cursor: "pointer",
          borderRadius: "0.5rem",
          margin: "1rem",
          height: "35%",
          width: "40%",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "aliceblue" }} />
            </InputAdornment>
          ),
          sx: {
            "& input::placeholder": {
              color: "aliceblue",
              opacity: 1,
            },
          },
        }}
      />
    </div>
  );
};

export default SearchBar;
