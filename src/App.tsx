import React from "react";
import { createUseStyles } from "react-jss";
import SchoolPage from "./SchoolPage";
import schools from "./schools";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ComparePage from "./ComparePage";
import PlanPage from "./PlanPage";

const styles = {
  App: {
    width: "100vw",
    display: "grid",
    placeItems: "center",
  },
  header: {
    color: "black",
    textDecoration: "none",
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
        <Link to="/">
          <h1 className={classes.header}> Curricula.fyi </h1>
        </Link>
        <Route exact path="/">
          <p>Explore different schools' Computer Science requirements</p>
          {Object.entries(schools).map(([slug, school]) => {
            return (
              <Link key={slug} to={`/schools/${slug}`}>
                <div className={classes.schoolName}> {school.shortName}</div>
              </Link>
            );
          })}
        </Route>
        <Route path="/compare">
          <ComparePage />
        </Route>
        <Route path="/plan">
          <PlanPage />
        </Route>
        <div>
          {Object.entries(schools).map(([slug, school]) => {
            return (
              <Route key={slug} path={`/schools/${slug}`}>
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
