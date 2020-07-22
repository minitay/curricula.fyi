import React from "react";
import { Plan } from "./types";
import { Link } from "react-router-dom";
import schools from "./schools";
import { createUseStyles } from "react-jss";

interface Props {
  id: string;
  plan: Plan;
}

const styles = {
  PlanPreview: {
    display: "flex",
    borderRadius: "15px",
    width: "400px",
    height: "80px",
    margin: "20px",
    alignItems: "center",
    boxShadow: "2px 2px 18px -10px rgba(0,0,0,0.75)",
  },
  logo: {
    height: "50px",
    padding: "20px",
  },
} as const;
const useStyles = createUseStyles(styles);

const PlanPreview: React.FC<Props> = ({ id, plan }) => {
  const classes = useStyles();
  const school = schools[plan.school];
  return (
    <Link to={`/plans/${id}`} className={classes.PlanPreview}>
      {school.logo && (
        <img
          className={classes.logo}
          src={school.logo}
          alt={`Logo for ${school.name}`}
        />
      )}
      <h4> {plan.name} </h4>
    </Link>
  );
};

export default PlanPreview;
