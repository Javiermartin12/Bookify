import { TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { debounce } from "lodash"; // Importa debounce de lodash
import {
  searchBarContainerStyles,
  searchBarStyles,
} from "../theme/materialUI/mtUI";
import React, { useState } from "react";
import { SearchBarProps } from "../interfaces/global";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const debouncedSearch = debounce(
    (query: string, onSearch: (query: string) => void) => {
      onSearch(query);
    },
    900
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    console.log(newQuery);
    setQuery(newQuery);
    debouncedSearch(newQuery, onSearch);
    console.log(newQuery);
  };
  return (
    <div>
      <Box sx={searchBarContainerStyles}>
        <TextField
          variant="outlined"
          placeholder="Search book for you..."
          sx={searchBarStyles}
          value={query}
          onChange={handleChange}
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
