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
          color: "aliceblue",
          cursor: "pointer",
          "&:hover": {
            color: "lightgray",
            transform: "scale(1.1)",
            boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)",
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
export const headerButtonStylesMobile: SxProps<Theme> = {
  "@media (max-width:430px)": {
    display: "none",
  },
};
export const headerButtonStylesDesktop: SxProps<Theme> = {
  background: "rgba(0, 0, 0, 0.2)",
  borderRadius: "0.5rem",
  overflow: "hidden",
  marginTop: "0.5rem",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  height: "40%",
  width: "60%",
  "&:hover": {
    background: "rgba(0, 0, 0, 0.3)",
  },
};
export const headerButtonStyles: SxProps<Theme> = {
  ...headerButtonStylesMobile,
  "@media (min-width:430px)": headerButtonStylesDesktop,
};
export const filterListIcon: SxProps<Theme> = {
  "@media (min-width:430px)": {
    display: "none",
  },
  "@media (max-width:430px)": {
    background: "rgba(0, 0, 0, 0.2)",
    borderRadius: "50%",
    padding: "0.5rem",
    overflow: "hidden",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.3)",
    },
    "&:active": {
      background: "rgba(255, 255, 255, 0.3)",
    },
  },
};

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
