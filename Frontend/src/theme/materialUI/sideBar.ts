import { SxProps } from "@mui/material";
import { Theme } from "@mui/material";
export const myBooksTypogr: SxProps<Theme> = {
  "@media (max-width:430px)": {
    display: "none",
  },
  "@media (min-width:431px)": {
    color: "aliceblue",
    cursor: "pointer",
  },
};
