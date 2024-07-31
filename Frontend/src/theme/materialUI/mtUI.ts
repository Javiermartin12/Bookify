import { SxProps } from "@mui/material";
import { Theme } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const sideBarContainerStyles: SxProps<Theme> = {
  display: { xs: "flex", sm: "none" },
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  gap: "1rem", // Agrega un espacio entre los iconos
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
        },
      },
    },
  },
});

export const searchBarContainerStyles: SxProps<Theme> = {
  "@media (max-width:430px)": {
    display: "none",
  },
};
export const searchBarStyles: SxProps<Theme> = {
  cursor: "pointer",
  borderRadius: "0.5rem",
  margin: "1rem",
  height: "35%",
  width: {
    xs: "80%",
    sm: "60%",
    md: "50%",
    lg: "40%",
  },
  "& input::placeholder": {
    color: "aliceblue",
    opacity: 1,
  },
};
