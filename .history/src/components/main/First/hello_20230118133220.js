import { Button, FormLabel, TextField, Box, Grid,Typography  } from "@mui/material";
import * as React from "react";
import { purple } from "@mui/material/colors";
import Images from "../../../assets/first.png";



function FirstProject() {
  return (
    <Grid container item gap={"3rem"} justifyContent="space-between" xs={12}>
      <Grid container item md={6} xs={12} flexDirection='column' justifyContent={"center"} alignContent={"center"} gap={"2rem"}>
      <Typography variant="h4" gutterBottom>WE ARE YOUR TECHNOLOGY PARTNER</Typography>
        <Typography align="center" >
          An innovation inspired, software design and consultancy company for
          the digital age.
        </Typography >
        <Button color="secondary" variant="contained" sx={{ paddingLeft:15px ,width: 200 }}>
          Get Started
        </Button>
      </Grid>
      <Grid item md={4} xs={12} component='img' src={Images} />
    </Grid>
  );
}
export default FirstProject;