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
    background: "white",
    display: "flex",
    borderRadius: "10px",
    width: "365px",
    height: "150px",
    margin: "20px",
    alignItems: "center",
    boxShadow: "2px 2px 18px -10px rgba(0,0,0,0.75)",
  },
  logo: {
    width: "125px",
    padding: "20px",
  },
  rightPartition: {
    borderRadius: "0px 10px 10px 0px",
    width: "215px",
    height: "150px",
    backgroundColor: (props: Props) => {
      const { r, g, b, a } = schools[props.plan.school].darkColor;
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  },
  name: {
    textDecoration: "none",
    fontSize: "1.1em",
    margin: {
      top: "20px",
      bottom: "10px",
    },
  },
  school: {
    textAlign: "right",
    width: "140px",
    margin: "0",
  },
  "@media(max-width: 700px)": {
    PlanPreview: {
      width: "250px",
      height: "120px",
    },
    rightPartition: {
      width: "150px",
      height: "120px",
    },
    name: {
      fontSize: "0.8em",
    },
    school: {
      fontSize: "0.6em",
      width: "100px",
    },
    logo: {
      width: "90px",
    },
  },
} as const;
const useStyles = createUseStyles(styles);

const PlanPreview: React.FC<Props> = ({ id, plan }) => {
  const classes = useStyles({ plan });
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
      <div className={classes.rightPartition}>
        <h4 className={classes.name}> {plan.name} </h4>
        <h5 className={classes.school}> {schools[plan.school].name} </h5>
      </div>
    </Link>
  );
};

export default PlanPreview;
