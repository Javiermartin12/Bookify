import { SxProps } from "@mui/material";
import { Theme } from "@mui/material";

export const boxToRow: SxProps<Theme> = {
  "@media (max-width:430px)": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  "@media (min-width:431px)": {
    display: "none",
  },
};

export const boxToAvatar: SxProps<Theme> = {
  "@media (max-width:430px)": {
    border: "1px solid black",
    height: "3.5rem",
    width: "3.5rem",
    borderRadius: "3rem",
  },
};
export const helloAvatarName: SxProps<Theme> = {
  color: "aliceblue",
  marginLeft: "0.5rem",
};
