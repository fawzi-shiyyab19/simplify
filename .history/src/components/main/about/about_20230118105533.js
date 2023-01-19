import { Button, Grid, Typography,Box } from "@mui/material";
import { Formik, useFormik } from "formik";
import Acontact from "../../../assets/contact.png";
import { Image } from "mui-image";
import { purple } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState, useEffect } from "react";

import Input from "@mui/joy/Input";
import { Textarea } from "@mui/joy";
const Form = () => {
  const intialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

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
        
        <form onSubmit={handleSubmit} noValidate>
          <Box
          required
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
            <Input required value={formik.values.yourName} name="yourName" placeholder={"Your Name*"}  color="neutral" onChange={handleChange}
/>{formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
            <Input

placeholder={"Your email address*"}
              onChange={handleChange}
              name="yourEmail"
              value={formValues.yourEmail}

            />
{formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
            <Input
            required
              placeholder={"Your phone number*"}
              onChange={handleChange}
              name="yourPhone"
              value={formValues.yourPhone}
            />
            {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
            <Textarea
            required
                        size="md"
                        width="100%"
                        minRows={6}
                        placeholder="Write a message here ...."
                        onChange={handleChange}
                        name="writeMessage"
                        value={formValues.writeMessage}
                      />
                      {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
<Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    sx={{ width: 200 }}
                    >
                    Submit
                  </Button>
          </Box>
          </form >
        </Grid>
      </Grid>
    </Box>
  );
}
export default AboutProject;
