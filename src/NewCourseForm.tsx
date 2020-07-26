import React, { FormEvent, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { CourseType, Plan, SubmitState } from "./types";
import { createUseStyles } from "react-jss";
import { animated, useSpring } from "react-spring";
import { delay } from "./utils";
import { v4 as uuid } from "uuid";
import { db } from "./firebase";

const styles = {
  NewCourseForm: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    padding: "25px",
    borderRadius: "10px",
    border: "1px solid #444499",
    backgroundColor: "#ddddff",
    margin: "20px",
    position: "relative",
  },
  closeButton: {
    backgroundColor: "#ddddff",
    position: "absolute",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "25px",
    height: "25px",
    right: "5px",
    top: "5px",
    zIndex: "10",
    border: "none",
    "&:hover": {
      filter: "brightness(90%)",
    },
  },
} as const;
const useStyles = createUseStyles(styles);

interface Props {
  closeForm: () => void;
  setPlan: (p: Plan) => void;
  plan: Plan;
}

const NewCourseForm: React.FC<Props> = ({ closeForm, setPlan, plan }) => {
  const classes = useStyles();
  const [submitState, setSubmitState] = useState(SubmitState.NotSubmited);
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [isClosing, setIsClosing] = useState(false);
  const [isCS, setIsCS] = useState(false);

  const props = useSpring({
    to: { height: isClosing ? "0px" : "400px" },
    from: { height: "0px" },
  });

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitState(SubmitState.Submitting);
    const type = isCS ? CourseType.CS : CourseType.NonCS;
    const course = { name: courseName, code: courseCode, id: uuid(), type };
    plan.courses = [course, ...plan.courses];
    try {
      await db.collection("courseRequests").add(course);
      setPlan(plan);
    } catch (e) {
      console.error(e);
      setSubmitState(SubmitState.Failure);
      return;
    }
    closeForm();
  }

  if (isClosing) {
    return <animated.div style={props}></animated.div>;
  }
  return (
    <animated.div style={props}>
      <form className={classes.NewCourseForm} onSubmit={handleSubmit}>
        <button
          className={classes.closeButton}
          onClick={(event) => {
            event.preventDefault();
            setIsClosing(true);
            delay(500).then(closeForm);
          }}
        >
          <ClearIcon fontSize="small" classes={{ fontSizeSmall: "10px" }} />
        </button>
        <h2> Add A Course </h2>
        <Box m={1}>
          <TextField
            disabled={submitState === SubmitState.Submitting}
            label="Course Name"
            variant="outlined"
            value={courseName}
            onChange={(event) => setCourseName(event.currentTarget.value)}
          />
        </Box>
        <Box m={1}>
          <TextField
            disabled={submitState === SubmitState.Submitting}
            label="Course Code"
            variant="outlined"
            value={courseCode}
            onChange={(event) => setCourseCode(event.currentTarget.value)}
          />
        </Box>
        <Box m={1}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isCS}
                onChange={(event) => setIsCS(event.currentTarget.checked)}
                name="isCS"
              />
            }
            label="Is this a CS course?"
          />
        </Box>
        <Box m={1}>
          <Button type="submit" variant="contained" color="primary">
            Add Course
          </Button>
        </Box>
      </form>
    </animated.div>
  );
};

export default NewCourseForm;
