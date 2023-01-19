import { Box, Grid } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "./components/header/nav";
import FirstProject from "./components/main/First/hello";
import "./App.css";
import AboutProject from "./components/main/about/about";
import BoxSx from "./components/footer/Footer";
import AllCard from "./components/main/card/card";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { cyan, purple, red } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
    fontSize: 15,
    h4: {
      fontSize: "3rem",
    },
  },
  palette: {
    primary: {
      main: "#ddffea",
    },
    secondary: purple,
    background: {
      paper: "#ddffea",
    },
    customRibRed:{
main :red[400],
superDark:red[800],

    },
    warning: {
      main: "#ed6c02",
    },
    
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" gap="3rem">
        <Grid container item xs={12} sx={{ backgroundColor: "red" }}>
          <ResponsiveAppBar />
        </Grid>

        <FirstProject />
        <AllCard />
        {/* <AboutProject /> */}
        <BoxSx />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
