import { SxProps } from "@mui/material";
import { Theme } from "@mui/material";

export const boxContainerBooks: SxProps<Theme> = {
  margin: "1rem",
  borderRadius: "0.5rem",
  padding: "1rem",
  display: "flex",
  flexDirection: "row",
  flexFlow: "row wrap",
  width: "93%",
  marginBottom: "60px",
  overflow: "scroll",
  "@media (max-width:430px)": {
    marginBottom: "100px",
    width: "80%",
    height: "100%",
  },
};

export const card: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  cursor: "pointer",
  flexFlow: "row wrpa",
  margin: "0.5rem",
  height: "93%",
  width: "20%",
  overflow: "hidden",
  "@media (max-width:430px)": {
    width: "60%",
    height: "55%",
  },
};
