import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
//Es ist auf Large Bildschirmen nicht centered. Falls Du das willst, entfer
export default function BoxSx() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Grid
      sx={{
        paddingTop:"",
        width: "100%",
        backgroundColor: "#ddffea"
      }}
    >
      <Grid
        container
        direction="row-reverse"
        width={"100%"}
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ px: 15 }}
      >
        <Grid item xs={12} lg={6}>
          <Grid
            container
            direction="column"
            gap={"1rem"}
            justifyContent="center"
            spacing={1}
            alignItems={ "center"}
          >
            <Grid item xs={12} >
                <br></br>
              <Typography variant="h5" component="div" gutterBottom>
              Join the community
              </Typography>
            </Grid>
            <Grid item xs={12}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                  <FacebookIcon />
                  <InstagramIcon />
                  <PinterestIcon />
                  <TwitterIcon />
                  <GitHubIcon />
              </Grid>
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
        </Grid>
        {matches ? null : (
          <Grid item xs={12} sx={{ width: "100%" }}>
            <Divider variant="middle" />
          </Grid>
        )}
        <Grid item xs={12} lg={6}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems={matches ? "flex-start" : "center"}
          >
            <Grid item xs={12} >
              <Typography variant="h5" component="h5" gutterBottom>
              Welcome to website

              </Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography
                sx={{ textAlign: matches ? null : "center" }}
                variant="subtitle1"
                component="h5"
                gutterBottom
              >
               Simplify9's tech incubation services offer a helping, guiding hand. To achieve successful incubation of concepts, and move them along the pathway from ideas to market-sweeping products, a variety of services will be provided.
              </Typography>
              
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
