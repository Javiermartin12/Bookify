import { SxProps } from "@mui/material";
import { Theme } from "@mui/material";

export const boxContainerBooks: SxProps<Theme> = {
  margin: "0.5rem",
  padding: "0.5rem",
  display: "flex",
  flexDirection: "column",
  height: "75%",
  width: "93%",
  "@media (max-width:430px)": {
    marginBottom: "100px",
    width: "91%",
    height: "70%",
    display: "flex",
  },
};

export const card: SxProps<Theme> = {
  cursor: "pointer",
  margin: "0.5rem",
  height: "auto",
  width: "20%",
  overflow: "hidden",
  "@media (max-width:430px)": {
    width: "50%",
    height: "auto",
  },
};

export const renderBooks: SxProps<Theme> = {
  display: "flex",
  justifyContent: "row",
  flexFlow: "wrap",
  overflow: "scroll",
  "@media (max-width:430px)": {
    display: "flex",
    justifyContent: "center",
  },
};
