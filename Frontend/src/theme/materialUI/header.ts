import { SxProps } from "@mui/material";
import { Theme } from "@mui/material";

export const boxToRow: SxProps<Theme> = {
  "@media (max-width:430px)": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "40%",
  },
  "@media (min-width:431px)": {
    display: "none",
  },
};

export const boxToAvatar: SxProps<Theme> = {
  "@media (max-width:430px)": {
    height: "3.5rem",
    width: "3.5rem",
    borderRadius: "3rem",
  },
};
export const helloAvatarName: SxProps<Theme> = {
  color: "aliceblue",
  marginLeft: "0.5rem",
  "@media (max-width:430px)": {
    width: "80%",
  },
};
export const logOut: SxProps<Theme> = {
  "@media (max-width:430px)": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  "@media (min-width:431px)": {
    display: "none",
  },
};
