import React from "react";
import { createUseStyles } from "react-jss";
import SchoolPage from "./SchoolPage";
import { nyuCAS } from "./schools";

const styles = {
  App: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  school: {
    width: "80vw",
  },
} as const;
const useStyles = createUseStyles(styles);

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <SchoolPage school={nyuCAS} />
    </div>
  );
}

export default App;
