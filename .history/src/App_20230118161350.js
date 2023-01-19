import { Box, Grid,CssBaseline  } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "./components/header/nav";
import FirstProject from "./components/main/First/hello";
import "./App.css";
import AboutProject from "./components/main/about/about";
import BoxSx from "./components/footer/Footer";
import AllCard from "./components/main/card/card";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blue, cyan, grey, purple, red } from "@mui/material/colors";

const theme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        
      }
    }
  },
  typography: {
    fontFamily: "Quicksand",
    fontSize: 15,
    h4: {
      fontSize: "3rem",
    },
    body1:{
      fontFamily: "Quicksand",
      fontSize:13,  
    },
    body1:{
      fontFamily: "Quicksand",
      fontSize:13,  
    }
  },
  palette: {
    mode:"dark",
    primary: {
      main: "#ddffea",
    },
    secondary: purple,
    background: {
      paper: "#ddffea",
    },
    customRibRed:{
main :red[400],
superDark:blue[800],
superLight:red[100]
    },
    text :{
primary : '#696969'
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
        <AboutProject />
        <BoxSx />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
