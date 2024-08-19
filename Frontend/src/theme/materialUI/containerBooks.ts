import { SxProps } from "@mui/material";
import { Theme } from "@mui/material";

export const boxContainerBooks: SxProps<Theme> = {
  margin: "0.5rem",
  padding: "0.5rem",
  display: "flex",
  flexDirection: "column",
  height: "75%",
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

export const card: SxProps<Theme> = {
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
    height: "auto",
  },
};
