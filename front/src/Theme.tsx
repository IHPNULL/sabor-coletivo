import { createTheme } from "@mui/material";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#22577A",
      light: "#38A3A5",
    },
    secondary: {
      main: "#57CC99",
      dark: "#80ED99",
      light: "#C7F9CC",
    },
  },
  typography: {
    fontFamily: "road rage",
    body1: {
      fontFamily: "road rage",
      fontWeight: 500,
    },
  },
});
