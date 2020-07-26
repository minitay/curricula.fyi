import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { Box, Button, TextField } from "@material-ui/core";
import { db } from "./firebase";
import { SubmitState } from "./types";

const styles = {
  SchoolRequestForm: {
    maxWidth: "400px",
    padding: "25px",
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
  success: {
    maxWidth: "300px",
    color: "#1dac14",
  },
  failure: {
    maxWidth: "300px",
    color: "red",
  },
} as const;
const useStyles = createUseStyles(styles);

interface Props {
  userKey: string;
}

const SchoolRequestForm: React.FC<Props> = ({ userKey }) => {
  const classes = useStyles();
  const [schoolName, setSchoolName] = useState("");
  const [email, setEmail] = useState("");
  const [submitState, setSubmitState] = useState(SubmitState.NotSubmited);

  async function handleSubmit() {
    if (!schoolName) {
      return;
    }
    setSubmitState(SubmitState.Submitting);
    try {
      await db.collection("mail").add({
        to: ["nick@nicholasyang.com"],
        message: {
          subject: "School Request",
          text: `Request for ${schoolName}`,
          html: `Request for ${schoolName}`,
        },
      });
      await db.collection("requests").add({ userKey, schoolName, email });
    } catch (e) {
      setSubmitState(SubmitState.Failure);
      return;
    }
    setSubmitState(SubmitState.Success);
  }
  let innerForm = (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Box m={1}>
        <TextField
          disabled={submitState === SubmitState.Submitting}
          label="School Name"
          variant="outlined"
          value={schoolName}
          onChange={(event) => setSchoolName(event.currentTarget.value)}
        />
      </Box>
      <Box m={1}>
        <TextField
          disabled={submitState === SubmitState.Submitting}
          label="Your Email (optional)"
          variant="outlined"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
      </Box>
      <Box m={1}>
        <Button
          disabled={submitState === SubmitState.Submitting}
          type="submit"
          variant="contained"
          color="primary"
        >
          SUBMIT
        </Button>
      </Box>
    </form>
  );
  if (submitState === SubmitState.Success) {
    innerForm = <p className={classes.success}>Thank you for your request</p>;
  }
  if (submitState === SubmitState.Failure) {
    innerForm = (
      <p className={classes.failure}>
        Sorry, your request did not go through, please try again{" "}
      </p>
    );
  }
  return (
    <div className={classes.SchoolRequestForm}>
      <h3> Don't see your school? </h3>
      <p>Please enter its name below and we'll add it as soon as possible</p>
      {innerForm}
    </div>
  );
};

export default SchoolRequestForm;
