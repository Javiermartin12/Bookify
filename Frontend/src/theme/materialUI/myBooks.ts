import { SxProps } from "@mui/material";
import { Theme } from "@mui/material";

export const rightMyBookContainer: SxProps<Theme> = {
  height: "100%",
  width: "100%",
};

export const containerBooks: SxProps<Theme> = {
  margin: "0.5rem",
  padding: "0.5rem",
  display: "flex",
  flexDirection: "column",
  flexFlow: "row wrap",
  height: "70%",
  width: "95%",
  overflow: "scroll",
  "@media (max-width:430px)": {
    marginBottom: "100px",
    width: "92%",
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
  height: "55%",
  width: "20%",
  overflow: "hidden",
  "@media (max-width:430px)": {
    width: "60%",
    height: "32%",
  },
};

export const headerMyBook: SxProps<Theme> = {
  "@media (max-width:430px)": {
    height: "8%",
    width: "92%",
    margin: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "@media (min-width:431px)": {
    height: "20%",
    width: "95%",
    margin: "1.3rem",
  },
};
export const title: SxProps<Theme> = {
  color: "aliceblue",
  marginTop: "2.2rem",
};
