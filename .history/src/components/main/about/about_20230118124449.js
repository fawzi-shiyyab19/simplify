import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Field, Form, Formik, useFormik } from "formik";
import Acontact from "../../../assets/contact.png";
import { Box } from "@mui/system";
import { Image } from "mui-image";
import Input from "@mui/joy/Input";
import { Textarea } from "@mui/joy";
import * as Yup from 'yup';

const AboutSchema = Yup.object().shape({
  yourName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  writeMessage: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  yourEmail: Yup.string().email('Invalid email').required('Required'),
  yourPhone: Yup.number()
  .typeError("That doesn't look like a phone number")
  .positive("A phone number can't start with a minus")
  .integer("A phone number can't include a decimal point")
  .min(8)
  .required('A phone number is required'),
});
function AboutProject() {

 const formik = useFormik({
  initialValues:{
  yourName: "",
  yourEmail: "",
  yourPhone: "",
  writeMessage: "",
 },
 validateOnBlur:false,
 validateOnMount:false,
 validationSchema:AboutSchema,
 onSubmit:values => {
  alert(JSON.stringify(values))
  console.log(values);
 }
})

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
    {({ errors, touched }) => (
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
<Input   name="yourName" placeholder={"Your Name*"}  color="neutral" />
{errors.yourName && touched.yourName ? (
             <div>{errors.yourName}</div>
           ) : null}
            <Input
              placeholder={"Your email address*"}
              name="yourEmail"

            />
            {errors.yourEmail && touched.yourEmail ? (
             <div>{errors.yourEmail}</div>
           ) : null}
            <Input  
              placeholder={"Your phone number*"}
              name="yourPhone"
            />
            {errors.yourPhone && touched.yourPhone ? (
             <div>{errors.yourPhone}</div>
           ) : null}

           <Input
                        size="md"
                        width="100%"
                        minRows={6}
                        placeholder="Write a message here ...."
                                  name="writeMessage"
                      />
                       {errors.writeMessage && touched.writeMessage ? (
             <div>{errors.writeMessage}</div>
           ) : null}
<Button
                    type="submit"
                    
                    variant="contained"
                  >
                    Submit
                  </Button>
          </Box>
        </form>
        </Grid>
      </Grid>
        )}
    </Box>
  );
}
export default AboutProject;
