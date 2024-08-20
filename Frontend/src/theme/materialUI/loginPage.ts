import { SxProps } from "@mui/material";
import { Theme } from "@mui/material";

export const mainBox: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  height: "100%",
  width: "95%",
  padding: "1rem",
};

export const button: SxProps<Theme> = {
  margin: "1rem",
  height: "7%",
  width: "9%",
};

export const boxWelcomePage: SxProps<Theme> = {
  height: "50%",
  width: "60%",
  display: "flex",
  alignItems: "center",
};
