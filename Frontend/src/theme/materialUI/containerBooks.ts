import { SxProps } from "@mui/material";
import { Theme } from "@mui/material";

export const boxContainerBooks: SxProps<Theme> = {
  margin: "1rem",
  borderRadius: "0.5rem",
  padding: "1rem",
  width: "93%",
  zIndex: "-1",
  marginBottom: "60px",
  "@media (max-width:430px)": {
    marginBottom: "100px",
    width: "85%",
    height: "100%",
  },
};

export const card: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "",
  height: "100%",
  width: "100%",
};
