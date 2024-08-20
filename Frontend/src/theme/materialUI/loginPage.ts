import { SxProps } from "@mui/material";
import { Theme } from "@mui/material";
export const boxTitle: SxProps<Theme> = {
  padding: "1rem",
  height: "95%",
  overflow: "hidden",
  width: "100%",
  "@media (max-width:430px)": {
    display: "flex",
    flexDirection: "column",
    padding: "0",
    alignItems: "center",
    mt: "5%",
  },
};

export const mainBox: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "75%",
  width: "97%",
  padding: "1rem",
  "@media (max-width:430px)": {
    height: "70%",
    width: "85%",
    overflow: "hidden",
  },
};
export const logBox: SxProps<Theme> = {
  margin: "1rem",
  height: "25%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  "@media (max-width:430px)": {
    overflow: "hidden",
    height: "20%",
    width: "100%",
  },
};

export const button: SxProps<Theme> = {
  height: "30%",
  margin: "0.5rem",
  width: "15%",
  "@media (max-width:430px)": {
    height: "55%",
    width: "30%",
  },
};

export const boxWelcomePage: SxProps<Theme> = {
  height: "60%",
  width: "80%",
  display: "flex",
  alignItems: "center",
  "@media (max-width:430px)": {
    height: "80%",
    width: "100%",
    overflow: "hidden",
  },
};
