import { Box, Grid } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from './components/header/nav';
import FirstProject from './components/main/First/hello';
import './App.css'
import AboutProject from './components/main/about/about';
import BoxSx from './components/footer/Footer';
import AllCard from './components/main/card/card'
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@mui/material';
import { purple } from '@mui/material/colors';

const theme = unstable_createMuiStrictModeTheme({
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

function App() {
  return (

    <Grid container justifyContent='center' gap='3rem'>
          <ThemeProvider theme={theme}>
      <Grid container item xs={12} sx={{ backgroundColor:'red'}}>
        <ResponsiveAppBar />
      </Grid>

      <FirstProject />
      <AllCard />
      <AboutProject />
      <BoxSx />
      </ThemeProvider>
</Grid>

  )
}

export default App;
