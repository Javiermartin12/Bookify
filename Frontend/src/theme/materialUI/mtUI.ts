import { SxProps } from "@mui/material";
import { Theme } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const sideBarContainerStyles: SxProps<Theme> = {
  display: { xs: "flex", sm: "none" },
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  gap: "1rem",
  "@media (max-width:430px)": {
    display: "flex",
  },
  "@media (min-width:431px)": {
    display: "none",
  },
};
export const theme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: 30,
          color: "aliceblue",
          cursor: "pointer",
          "&:hover": {
            color: "lightgray",
            transform: "scale(1.1)",
            borderRadius: "1rem",
          },
          "&:active": {
            color: "gray",
            transform: "scale(0.9)",
          },
        },
      },
    },
  },
});
export const headerButtonStyles: SxProps<Theme> = {
  bgcolor: "black",
  "@media (max-width:430px)": {
    width: "60%",
    display: "none",
  },
};

export const searchBarStyles: SxProps<Theme> = {
  cursor: "pointer",
  borderRadius: "0.5rem",
  margin: "1rem",
  height: "35%",
  width: "50%",
  "@media (max-width:430px)": {
    width: "93%",
  },
  "& input::placeholder": {
    color: "aliceblue",
    opacity: 1,
  },
};
