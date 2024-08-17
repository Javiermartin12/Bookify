import { SxProps } from "@mui/material";
import { Theme } from "@mui/material";

export const mainCpontainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  padding: "0.5rem",
};

export const containerBook: SxProps<Theme> = {
  width: "60%",
  height: "95%",
  maxWidth: "90%",
  margin: "1rem",
  display: "flex",
  boxShadow: 3,
  borderRadius: "0.5rem",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "1rem",
  overflowY: "scroll",
};
export const image: SxProps<Theme> = {
  objectFit: "cover",
  borderRadius: "4px",
  width: "30%",
  height: "100%",
};
