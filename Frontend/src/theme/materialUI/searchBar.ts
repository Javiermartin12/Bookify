import { SxProps } from "@mui/material";
import { Theme } from "@mui/material";

export const searchBarStyle: SxProps<Theme> = {
  cursor: "pointer",
  borderRadius: "0.5rem",
  margin: "1rem",
  height: "35%",
  width: "40%",
  "& input::placeholder": {
    color: "aliceblue",
    opacity: 1,
  },
};
