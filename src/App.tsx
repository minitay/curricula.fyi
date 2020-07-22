import React from "react";
import { createUseStyles } from "react-jss";
import SchoolPage from "./SchoolPage";
import schools from "./schools";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ComparePage from "./ComparePage";
import PlanPage from "./PlanPage";
import ReqsPage from "./ReqsPage";
import { useLocalStorage } from "./utils";
import { v4 as uuid } from "uuid";
import MyPlansPage from "./MyPlansPage";
import NewPlanPage from "./NewPlanPage";

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
  const [userKey, setUserKey] = useLocalStorage("userKey", uuid());
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
        <Route path="/plans/new">
          <NewPlanPage userKey={userKey} />
        </Route>
        <Route path="/my-plans">
          <MyPlansPage userKey={userKey} />
        </Route>
        <div>
          {Object.entries(schools).map(([slug, school]) => {
            return (
              <React.Fragment key={slug}>
                <Route key={slug} path={`/schools/${slug}`}>
                  <SchoolPage slug={slug} school={school} />
                </Route>
                <Route path={`/plan/${slug}`}>
                  <PlanPage slug={slug} school={school} />
                </Route>
                <Route path={`/reqs/${slug}`}>
                  <ReqsPage slug={slug} school={school} />
                </Route>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </Router>
  );
}

export default App;
