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
