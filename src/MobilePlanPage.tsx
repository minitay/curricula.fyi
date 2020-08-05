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
  },
});

const MobilePlanPage: React.FC<Props> = ({ plan, school }) => {
  const classes = useStyles();
  return (
    <div>
      <h1> {plan.name} </h1>
      {plan.terms.map((term) => (
        <div className={classes.term}>
          {term.map((course) => (
            <CourseTile
              name={course.name}
              color={school.lightColor}
              type={course.type}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MobilePlanPage;
