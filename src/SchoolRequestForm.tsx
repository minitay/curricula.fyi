import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { Box, Button, TextField } from "@material-ui/core";

const styles = {
  SchoolRequestForm: {
    maxWidth: "400px",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #444499",
    backgroundColor: "#ddddff",
    margin: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    alignItems: "flex-end",
  },
} as const;
const useStyles = createUseStyles(styles);

const SchoolRequestForm = () => {
  const classes = useStyles();
  const [schoolName, setSchoolName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className={classes.SchoolRequestForm}>
      <h3> Don't see your school? </h3>
      <p>Please enter its name below and we'll add it as soon as possible</p>
      <form className={classes.form}>
        <Box m={1}>
          <TextField
            label="School Name"
            variant="outlined"
            value={schoolName}
            onChange={(event) => setSchoolName(event.currentTarget.value)}
          />
        </Box>
        <Box m={1}>
          <TextField
            label="Your Email (optional)"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
        </Box>
        <Box m={1}>
          <Button type="submit" variant="contained" color="primary">
            SUBMIT
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default SchoolRequestForm;
