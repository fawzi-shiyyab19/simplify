import { Box, Grid } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from './components/header/nav';
import FirstProject from './components/main/First/hello';
import './App.css'
import AboutProject from './components/main/about/about';
import BoxSx from './components/footer/Footer';
import AllCard from './components/main/card/card'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
    fontSize: 15,
    h4: {
fontSize:"6REM"
    }
  },
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
    warning: {
      main: '#ed6c02'
    }
  
  },

});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Grid container justifyContent='center' gap='3rem'>
  
      <Grid container item xs={12} sx={{ backgroundColor:'red'}}>
        <ResponsiveAppBar />
      </Grid>

      <FirstProject />
      <AllCard />
       {/* <AboutProject /> */}
      <BoxSx /> 

</Grid>
 </ThemeProvider>
  )
}

export default App;
