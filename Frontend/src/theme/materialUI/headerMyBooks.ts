import { SxProps } from "@mui/material";
import { Theme } from "@mui/material";
export const headerMyBook: SxProps<Theme> = {
  "@media (max-width:430px)": {
    height: "8%",
    width: "92%",
    margin: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "@media (min-width:431px)": {
    height: "20%",
    width: "90%",
    margin: "1.3rem",
  },
};
export const title: SxProps<Theme> = {
  color: "aliceblue",
  marginTop: "1rem",
};
