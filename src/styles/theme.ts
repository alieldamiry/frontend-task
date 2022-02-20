import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#7a7a7a",
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          paddingInline: 30,
        },
      },
    },
  },
});

export default theme;
