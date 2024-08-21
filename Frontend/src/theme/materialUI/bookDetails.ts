import { SxProps } from "@mui/material";
import { Theme } from "@mui/material";

export const mainCpontainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.5rem",
  "@media (max-width:430px)": {
    height: "100%",
    width: "96%",
  },
};

export const containerBook: SxProps<Theme> = {
  width: "60%",
  height: "95%",
  gap: "1rem",
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
  "@media (max-width:430px)": {
    width: "90%",
  },
};
export const image: SxProps<Theme> = {
  objectFit: "cover",
  borderRadius: "4px",
  width: "30%",
  height: "100%",
  "@media (max-width:430px)": {
    width: "70%",
    height: "100%",
  },
};

export const buttonContainer: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
};
