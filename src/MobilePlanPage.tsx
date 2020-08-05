import React from "react";
import { Plan, School } from "./types";
import CourseTile from "./CourseTile";
import { createUseStyles } from "react-jss";

interface Props {
  school: School;
  plan: Plan;
}

const useStyles = createUseStyles({
  term: {
    backgroundColor: "#cacaca",
    padding: "20px",
    marginBottom: "40px",
    borderRadius: "15px",
  },
  termContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  warning: {
    padding: "10px",
    border: "1px solid #444499",
    backgroundColor: "#ddddff",
    borderRadius: "10px",
    maxWidth: "80vw",
  },
});

const MobilePlanPage: React.FC<Props> = ({ plan, school }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.warning}>
        Unfortunately we don't allow editing plans on mobile. Sorry! Drag n'
        drop just doesn't work well on a phone.
      </div>
      <h1> {plan.name} </h1>
      <div>
        {plan.terms.map((term, i) => (
          <div className={classes.termContainer}>
            <h3>{i + 1}</h3>
            <div className={classes.term}>
              {term.map((course) => (
                <CourseTile
                  name={course.name}
                  color={school.lightColor}
                  type={course.type}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobilePlanPage;
