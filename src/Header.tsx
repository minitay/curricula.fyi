import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

const styles = {
  Header: {
    width: "100vw",
    height: "75px",
    backgroundColor: "#2E86AB",
    textAlign: "center",
    marginBottom: "40px",
  },
  name: {
    color: "white",
    textDecoration: "none",
  },
} as const;
const useStyles = createUseStyles(styles);

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.Header}>
      <Link to="/">
        <h1 className={classes.name}> Curricula.fyi </h1>
      </Link>
    </div>
  );
};

export default Header;
