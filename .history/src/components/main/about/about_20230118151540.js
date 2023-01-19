import { Button, Grid, Typography,FormLabel, TextField, Box  } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import Acontact from "../../../assets/contact.png";
import { Image } from "mui-image";

import * as Yup from "yup";

const AboutSchema = Yup.object().shape({
  yourName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  writeMessage: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  yourEmail: Yup.string().email("Invalid email").required("Required"),
  yourPhone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),
});
function AboutProject() {
  const formik = useFormik({
    initialValues: {
      yourName: "",
      yourEmail: "",
      yourPhone: "",
      writeMessage: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: AboutSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      console.log(values);
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
        <Grid item xs={5}>
        
       
              <TextField
                name="yourName"
                placeholder={"Your Name*"}
                color="neutral"
                onChange={formik.handleChange}
                value={formik.values.yourName}
                onBlur={formik.validateOnBlur}
              />
              <Typography>{formik.errors.yourName}</Typography>

              <TextField
                placeholder={"Your email address*"}
                name="yourEmail"
                onChange={formik.handleChange}
                value={formik.values.yourEmail}
                onBlur={formik.validateOnBlur}
              />
              <Typography>{formik.errors.yourEmail}</Typography>

              <TextField
                placeholder={"Your phone number*"}
                name="yourPhone"
                onChange={formik.handleChange}
                value={formik.values.yourPhone}
              />
              <Typography>{formik.errors.yourPhone}</Typography>

              <TextField
                size="md"
                width="100%"
                minRows={6}
                placeholder="Write a message here ...."
                name="writeMessage"
                onChange={formik.handleChange}
                value={formik.values.writeMessage}
                onBlur={formik.validateOnBlur}
              />
              <Typography>{formik.errors.writeMessage}</Typography>

              <Button onClick={formik.handleSubmit} variant="contained">
                Submit
              </Button>
            </Box>
     
        </Grid>
       
      </Grid>
    </Box>
  );
}
export default AboutProject;
