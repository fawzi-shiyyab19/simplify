import { Box, Grid } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from './components/header/nav';
import FirstProject from './components/main/First/hello';
import AllCard from './components/main/card/card'
import theme from './assets/theme';
import { ThemeProvider } from "@mui/material/styles";

import './App.css'
import AboutProject from './components/main/about/about';
import BoxSx from './components/footer/Footer';
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Grid container justifyContent='center' gap='3rem'>
      <Grid container item xs={12} sx={{ backgroundColor:'red'}}>
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
