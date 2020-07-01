import React from "react";
import { createUseStyles } from "react-jss";
import Requirements from "./Requirements";
import { cornell } from "./schools";

const styles = {
  App: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  requirements: {
    width: "80vw",
  },
} as const;
const useStyles = createUseStyles(styles);

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Requirements requirements={cornell} />
    </div>
  );
}

export default App;
