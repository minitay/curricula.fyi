import React from "react";
import { createUseStyles } from "react-jss";
import SchoolPage from "./SchoolPage";
import schools from "./schools";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
        <Switch>
          <Route exact path="/">
            <MyPlansPage userKey={userKey} />
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
          <Route path={`/plans/:id`}>
            <PlanPage userKey={userKey} />
          </Route>
        </Switch>
        <div>
          {Object.values(schools).map((school) => {
            return (
              <React.Fragment key={school.slug}>
                <Route path={`/reqs/${school.slug}`}>
                  <ReqsPage slug={school.slug} school={school} />
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
