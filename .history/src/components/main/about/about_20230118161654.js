import { Button, Grid, Typography, Box, Input  } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import Acontact from "../../../assets/contact.png";

import * as Yup from "yup";
const commonStyles = {
  borderColor: 'text.primary',
  m: 1,
  width: '100%',
  height: '100%',
};


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
          <img src={Acontact} showLoading={true} />
        </Grid>
        <Grid item xs={5}>
          <Box
          
            width="100%"
            height="100%"
            sx={{
              py: 2,
              display: "grid",
              gap: 2,
              alignItems: "center",
              flexWrap: "wrap",
              ...commonStyles
            }}
            display="flex"
            flexDirection={"column"}
            gap="1rem"
            padding='2rem'
          >
              <Input
              sx={{color:"text.primary" , ...commonStyles,border:1,borderRadius: '16px'}}
                name="yourName"
                placeholder={"Your Name*"}
                color="secondary"
                onChange={formik.handleChange}
                value={formik.values.yourName}
                onBlur={formik.validateOnBlur}
              />
              <Typography sx={{color:"customRibRed.main"}} variant="body1">{formik.errors.yourName}</Typography>

              <Input
                sx={{color:"text.primary" , ...commonStyles, border:1,borderRadius: '16px'}}
                placeholder={"Your email address*"}
                name="yourEmail"
                onChange={formik.handleChange}
                value={formik.values.yourEmail}
                onBlur={formik.validateOnBlur}
              />
              <Typography sx={{color:"customRibRed.main"}} variant="body1">{formik.errors.yourEmail}</Typography>

              <Input
                            sx={{color:"text.primary" , ...commonStyles,border:1,borderRadius: '16px'}}

                placeholder={"Your phone number*"}
                name="yourPhone"
                onChange={formik.handleChange}
                value={formik.values.yourPhone}
              />
              <Typography sx={{color:"customRibRed.main" , border}} variant="body1">{formik.errors.yourPhone}</Typography>

              <Input
                            sx={{color:"text.primary" , ...commonStyles,border:1,borderRadius: '16px'}}

                width="100%"
                minRows={6}
                placeholder="Write a message here ...."
                name="writeMessage"
                onChange={formik.handleChange}
                value={formik.values.writeMessage}
                onBlur={formik.validateOnBlur}
              />
              <Typography sx={{color:"customRibRed.main"}} variant="body1">{formik.errors.writeMessage}</Typography>

              <Button color="secondary" onClick={formik.handleSubmit} variant="contained">
                Submit
              </Button>
        </Box>
        </Grid>
       
      </Grid>
    </Box>
  );
}
export default AboutProject;
