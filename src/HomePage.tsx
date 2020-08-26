import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { createUseStyles } from "react-jss";
import MyPlans from "./MyPlans";

interface Props {
  userKey: string;
}

const styles = {
  HomePage: {
    background: "linear-gradient(#2E86AB, white)",
  },
  header: {
    minHeight: "300px",
    height: "50vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  },
  headerName: {
    fontSize: "4em",
    padding: "25px",
    width: "250px",
    textAlign: "right",
  },
  mainContent: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    minHeight: "50vw",
  },
  "@media(max-width: 700px)": {
    header: {
      flexDirection: "column",
      minHeight: "0px",
    },
    leftHeader: {
      width: "100vw",
    },
    rightHeader: {
      display: "none",
    },
    mainContent: {
      paddingBottom: "50px",
    },
  },
} as const;
const useStyles = createUseStyles(styles);

const HomePage: React.FC<Props> = ({ userKey }) => {
  const classes = useStyles();
  return (
    <div className={classes.HomePage}>
      <div className={classes.header}>
        <h1 className={classes.headerName}> Curricula .fyi</h1>
      </div>
      <div className={classes.mainContent}>
        <h1> Your Plans </h1>
        <MyPlans userKey={userKey} />
        <Link to={`/plans/new`}>
          <Button variant="contained" color="secondary">
            Make New Plan
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
