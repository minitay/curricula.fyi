import React, { FormEvent, useState } from "react";
import schools from "./schools";
import { createUseStyles } from "react-jss";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { School } from "./types";
import { Box, Button } from "@material-ui/core";
import { db } from "./firebase";
import { useHistory } from "react-router-dom";
import SchoolRequestForm from "./SchoolRequestForm";

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
} as const;
const useStyles = createUseStyles(styles);

interface Props {
  userKey: string;
}

const NewPlanPage: React.FC<Props> = ({ userKey }) => {
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
  return (
    <div className={classes.NewPlanPage}>
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
