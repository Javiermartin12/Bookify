import { SxProps } from "@mui/material";
import { Theme } from "@mui/material";
export const myBooksTypogr: SxProps<Theme> = {
  textDecorationLine: "none",

  "@media (max-width:430px)": {
    display: "none",
  },
  "@media (min-width:431px)": {
    color: "aliceblue",
    cursor: "pointer",
    mt: "1rem",
  },
};

export const styleLogoutBox: SxProps<Theme> = {
  marginTop: "auto",
  "@media (max-width:430px)": {
    display: "none",
  },
};
