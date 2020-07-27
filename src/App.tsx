import React from "react";
import { createUseStyles } from "react-jss";
import schools from "./schools";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ComparePage from "./ComparePage";
import PlanPage from "./PlanPage";
import ReqsPage from "./ReqsPage";
import { useLocalStorage } from "./utils";
import { v4 as uuid } from "uuid";
import HomePage from "./HomePage";
import NewPlanPage from "./NewPlanPage";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Header from "./Header";

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
  const [userKey] = useLocalStorage("userKey", uuid());
  const theme = createMuiTheme({
    palette: {
      secondary: {
        light: "#F56F66",
        main: "#F24236",
        dark: "#E61D0F",
        contrastText: "white",
      },
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className={classes.App}>
          <Switch>
            <Route exact path="/">
              <HomePage userKey={userKey} />
            </Route>
            <Route path="/compare">
              <Header />
              <ComparePage />
            </Route>
            <Route path="/plans/new">
              <Header />
              <NewPlanPage userKey={userKey} />
            </Route>
            <Route path={`/plans/:id`}>
              <Header />
              <PlanPage userKey={userKey} />
            </Route>
          </Switch>
          <div>
            {Object.values(schools).map((school) => {
              return (
                <Route key={school.slug} path={`/reqs/${school.slug}`}>
                  <Header />
                  <ReqsPage slug={school.slug} school={school} />
                </Route>
              );
            })}
          </div>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
