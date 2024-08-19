import { SxProps } from "@mui/material";
import { Theme } from "@mui/material";

export const containerBooks: SxProps<Theme> = {
  margin: "1rem",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  flexFlow: "row wrap",
  height: "60%",
  width: "93%",
  overflow: "scroll",
  "@media (max-width:430px)": {
    marginBottom: "100px",
    width: "80%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
};

export const cardMyBooks: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  cursor: "pointer",
  flexFlow: "row wrpa",
  margin: "0.5rem",
  height: "auto",
  width: "20%",
  overflow: "hidden",
  "@media (max-width:430px)": {
    width: "60%",
    height: "55%",
  },
};
