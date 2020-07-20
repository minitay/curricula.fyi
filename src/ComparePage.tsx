import React, { useState } from "react";
import { useQuery } from "./utils";
import schools from "./schools";
import { useHistory } from "react-router-dom";
import { createUseStyles } from "react-jss";
import ReqsPage from "./ReqsPage";

const styles = {
  schools: {
    display: "flex",
    overflowY: "scroll",
    width: "90vw",
  },
  school: {
    padding: "20px",
  },
} as const;
const useStyles = createUseStyles(styles);

const ComparePage = () => {
  const query = useQuery();
  const history = useHistory();
  const [newSchool, setNewSchool] = useState("");
  const classes = useStyles();
  const selectedSchools = query.get("schools")?.split(",") || [];
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(newSchool);
          history.push(
            `/compare?schools=${[...selectedSchools, newSchool].join(",")}`
          );
        }}
      >
        <select
          value={newSchool}
          onChange={(e) => setNewSchool(e.currentTarget.value)}
        >
          <option key="" value="">
            Select a school
          </option>
          {Object.entries(schools)
            .filter(([key]) => !selectedSchools.includes(key))
            .map(([key, school]) => (
              <option value={key} key={key}>
                {school.shortName}
              </option>
            ))}
        </select>
        <button> + </button>
      </form>
      <div className={classes.schools}>
        {selectedSchools.map((school) => (
          <div className={classes.school}>
            <ReqsPage width="40vw" slug={school} school={schools[school]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparePage;
