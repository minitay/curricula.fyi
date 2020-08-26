import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

const styles = {
  Header: {
    width: "100vw",
    height: "100px",
    backgroundColor: "#2E86AB",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    color: "white",
    textAlign: "right",
    textDecoration: "none",
  },
  h1: {
    margin: "0",
  },
} as const;
const useStyles = createUseStyles(styles);

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.Header}>
      <Link to="/">
        <div className={classes.name}>
          <h1 className={classes.h1}> Curricula </h1>
          <h1 className={classes.h1}> .fyi</h1>
        </div>
      </Link>
    </div>
  );
};

export default Header;
