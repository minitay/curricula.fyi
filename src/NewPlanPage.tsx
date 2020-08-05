import React, { FormEvent, useState } from "react";
import schools from "./schools";
import { createUseStyles } from "react-jss";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { School } from "./types";
import { Box, Button } from "@material-ui/core";
import { db } from "./firebase";
import { Link, useHistory } from "react-router-dom";
import SchoolRequestForm from "./SchoolRequestForm";
import { useWindowSize } from "./utils";

const styles = {
  NewPlanPage: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "1.3em",
    maxWidth: "80vw",
  },
  option: {
    padding: "10px",
    fontSize: "1.1em",
  },
  submitButton: {
    width: "100px",
  },
  warning: {
    padding: "10px",
    border: "1px solid #444499",
    backgroundColor: "#ddddff",
    borderRadius: "10px",
    maxWidth: "80vw",
  },
} as const;
const useStyles = createUseStyles(styles);

interface Props {
  userKey: string;
}

const NewPlanPage: React.FC<Props> = ({ userKey }) => {
  const { width } = useWindowSize();
  const [school, setSchool] = useState<School | null>(null);
  const [name, setName] = useState<string>("My Awesome Plan");
  const history = useHistory();
  const classes = useStyles();
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!school) {
      return;
    }
    const ref = await db
      .collection("users")
      .doc(userKey)
      .collection("plans")
      .add({ name, school: school.slug, courses: school.courses, terms: {} });
    history.push(`/plans/${ref.id}`);
  }
  if (width! < 700) {
    return (
      <div>
        <div className={classes.warning}>
          Unfortunately we don't allow creating plans on mobile :(
        </div>
        <Box m={2}>
          <Link to={`/`}>
            <Button variant="contained" color="secondary">
              Go Back?
            </Button>
          </Link>
        </Box>
      </div>
    );
  }
  return (
    <div className={classes.NewPlanPage}>
      <h2> New Plan </h2>
      <form onSubmit={handleSubmit}>
        <Autocomplete
          id="schools"
          options={Object.values(schools)}
          getOptionLabel={(option: School) => option.name}
          value={school}
          onChange={(event, newSchool) => setSchool(newSchool)}
          renderInput={(params) => (
            <TextField {...params} label="Which School?" variant="outlined" />
          )}
        />
        <SchoolRequestForm userKey={userKey} />
        <TextField
          label="Plan Name"
          variant="outlined"
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
        />
        <Box m={2}>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.submitButton}
          >
            CREATE
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default NewPlanPage;
