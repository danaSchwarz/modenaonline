import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#f2d1b3",
      main: '#d9b5a0',
      dark: "#734E40",
      contrastText: "#8c4126",
    },
    secondary: {
      light: "#f2d1b3",
      main: '#bf8563',
      dark: "#8c4126",
      contrastText: "#8c4126",

    },
  },

  typography: {
    fontFamily: "Red Hat Display"
  }
});