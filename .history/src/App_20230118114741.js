import { Box, Grid } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from './components/header/nav';
import FirstProject from './components/main/First/hello';
import './App.css'
import AboutProject from './components/main/about/about';
import BoxSx from './components/footer/Footer';
import AllCard from './components/main/card/card'
import { ThemeProvider, createTheme } from '@mui/material';
import { purple } from '@mui/material/colors';

const theme = createTheme({
 
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
