import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as React from "react";
import { purple } from "@mui/material/colors";

const theme = createTheme({
    typography: {
      fontFamily: "Quicksand",
      fontWeight: 700,
      fontSize: 50,
    },
    palette: {
      primary: {
        main: "#fefefe",
      },
      secondary: purple,
    },
  });
  export default theme;