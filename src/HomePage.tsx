import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { createUseStyles } from "react-jss";
import SloganScreen from "./SloganScreen";
import MyPlans from "./MyPlans";

interface Props {
  userKey: string;
}

const styles = {
  HomePage: {},
  header: {
    minHeight: "300px",
    height: "50vh",
    width: "100vw",
    display: "flex",
  },
  leftHeader: {
    width: "40vw",
    height: "100%",
    background: "#2E86AB",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  rightHeader: {
    background: "white",
    color: "black",
    width: "60vw",
    fontSize: "2em",
    display: "grid",
    placeItems: "center",
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
    backgroundColor: "#565554",
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
        <div className={classes.leftHeader}>
          <h1 className={classes.headerName}> Curricula .fyi</h1>
        </div>
        <div className={classes.rightHeader}>
          <SloganScreen />
        </div>
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
