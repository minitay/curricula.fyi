import React from "react";
import { createUseStyles } from "react-jss";
import SchoolPage from "./SchoolPage";
import * as schools from "./schools";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = {
  App: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  schoolName: {
    fontSize: "3em",
    color: "black",
    textDecoration: "none",
    fontWeight: 700,
    "&:visited": {
      textDecoration: "none",
    },
  },
  schoolLogo: {
    width: "200px",
    padding: "5px",
    transition: "filter 0.2s",
  },
} as const;
const useStyles = createUseStyles(styles);

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.App}>
        <Route exact path="/">
          {Object.entries(schools).map(([slug, school]) => {
            return (
              <Link to={`/schools/${slug}`}>
                <div className={classes.schoolName}> {school.shortName}</div>
              </Link>
            );
          })}
        </Route>
        <div>
          {Object.entries(schools).map(([slug, school]) => {
            return (
              <Route path={`/schools/${slug}`}>
                <SchoolPage school={school} />
              </Route>
            );
          })}
        </div>
      </div>
    </Router>
  );
}

export default App;
