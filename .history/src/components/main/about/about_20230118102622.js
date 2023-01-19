import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Formik, useFormik } from "formik";
import Acontact from "../../../assets/contact.png";
import { Box } from "@mui/system";
import { Image } from "mui-image";
import { purple } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Input from "@mui/joy/Input";
import { Textarea } from "@mui/joy";
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
function validateEmail(values) {
  let error;
  if (!values) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
    error = 'Invalid email address';
  }
  return error;
}

function validateUsername(values) {
  let error;
  if (values === 'admin') {
    error = 'Nice try!';
  }
  return error;
}
function AboutProject() {
  
  const formik = useFormik({
    initialValues: {
      yourName: "",
      yourEmail: "",
      yourPhone: "",
      writeMessage: "",
    },
    onSubmit: (values) => {
        alert(JSON.stringify(values))
      console.log(values);
    },
    
});

const handleChange = (newValue) => {};

  return (
    <Box
      width={"100%"}
      textAlign="center"
      display="flex"
      flexDirection={"column"}
      gap="1rem"
    >
      <Typography variant="h4" component={"h4"}>
        Ready to Connect?
      </Typography>
      <Typography variant="span" component={"span"}>
        Your email address will not be published.
      </Typography>
      <Grid container spacing={2} width="90%" gap="15%" alignSelf={"center"}>
        <Grid item xs={5}>
          <Image src={Acontact} showLoading={true} />
        </Grid>
        <Grid item xs={5} >
          <Formik initialValues {{
      yourName: "",
      yourEmail: "",
      yourPhone: "",
      writeMessage: "",
    }}
    onSubmit: (values) => {
        alert(JSON.stringify(values))
      console.log(values);
    },>
        {({ errors, touched, isValidating }) => (
        <form onSubmit={formik.handleSubmit}>
          
          <Box
          
            width="100%"
            height="100%"
            boxShadow={"rgba(213, 213, 230, 0.55) 0px 0px 20px"}
            borderRadius="5px"
            sx={{
              py: 2,
              display: "grid",
              gap: 2,
              alignItems: "center",
              flexWrap: "wrap",
            }}
            display="flex"
            flexDirection={"column"}
            gap="1rem"
            padding='2rem'
          >
            <Input required value={formik.values.yourName} name="yourName" placeholder={"Your Name*"}  color="neutral" onChange={formik.handleChange}
/>
            <Input
            validate={validateEmail}
              placeholder={"Your email address*"}
              onChange={formik.handleChange}
              name="yourEmail"
              value={formik.values.yourEmail}

            />
            <Input
            required
              placeholder={"Your phone number*"}
              onChange={formik.handleChange}
              name="yourPhone"
              value={formik.values.yourPhone}
            />
            <Textarea
            required
                        size="md"
                        width="100%"
                        minRows={6}
                        placeholder="Write a message here ...."
                        onChange={formik.handleChange}
                        name="writeMessage"
                        value={formik.values.writeMessage}
                      ></Textarea>
<Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    sx={{ width: 200 }}
                    >
                    Submit
                  </Button>
          </Box>
        </form>
        )}
        </Formik>
        </Grid>
      </Grid>
    </Box>
  );
}
export default AboutProject;
