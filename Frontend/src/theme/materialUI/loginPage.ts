import { SxProps } from "@mui/material";
import { Theme } from "@mui/material";

export const mainBox: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  padding: "1rem",
};

export const button: SxProps<Theme> = {
  margin: "1rem",
  height: "3rem",
  width: "7rem",
};
