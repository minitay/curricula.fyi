import React from "react";
import { School } from "./types";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

interface Props {
  school: School;
  slug: string;
  width?: string;
}

const styles = {
  SchoolPage: {
    minWidth: "250px",
  },
  link: {
    color: "black",
    textDecoration: "none",
    "&:visited": {
      textDecoration: "none",
    },
  },
} as const;
const useStyles = createUseStyles(styles);

const SchoolPage: React.FC<Props> = (props) => {
  const classes = useStyles(props);
  const { school, slug } = props;
  return (
    <div className={classes.SchoolPage}>
      <h1>{school.name} </h1>
      <Link to={`/reqs/${slug}`}>
        <h2 className={classes.link}> Requirements </h2>
      </Link>
      <Link to={`/plan/${slug}`}>
        <h2 className={classes.link}> Plan </h2>
      </Link>
    </div>
  );
};

export default SchoolPage;
