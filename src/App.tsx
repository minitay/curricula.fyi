import React from "react";
import { createUseStyles } from "react-jss";
import Requirements from "./Requirements";
import { cmu, cornell, nyuCAS } from "./schools";

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
      <div className={classes.school}>
        <h1> Cornell </h1>
        <Requirements requirements={cornell} />
      </div>
      <div className={classes.school}>
        <h1> NYU CAS </h1>
        <Requirements requirements={nyuCAS} />
      </div>
      <div className={classes.school}>
        <h1> CMU </h1>
        <Requirements requirements={cmu} />
      </div>
    </div>
  );
}

export default App;
