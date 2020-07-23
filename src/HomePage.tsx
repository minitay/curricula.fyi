import React, { useEffect, useState } from "react";
import PlanPreview from "./PlanPreview";
import { Link } from "react-router-dom";
import { LoadingState, Plan } from "./types";
import { db } from "./firebase";
import { Button } from "@material-ui/core";
import { createUseStyles } from "react-jss";

interface Props {
  userKey: string;
}

const styles = {
  HomePage: {},
  plans: {
    width: "80vw",
    display: "flex",
    flexWrap: "wrap",
  },
  header: {
    minHeight: "200px",
    height: "50vh",
    width: "100vw",
    display: "flex",
  },
  leftHeader: {
    width: "40vw",
    height: "100%",
    background: "lightblue",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  rightHeader: {
    background: "black",
    color: "white",
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
  },
} as const;
const useStyles = createUseStyles(styles);

async function getPlans(userKey: string) {
  const query = await db
    .collection("users")
    .doc(userKey)
    .collection("plans")
    .get();
  let plans: { [id: string]: Plan } = {};
  query.forEach((doc) => {
    plans[doc.id] = doc.data() as Plan;
  });
  return plans;
}

const HomePage: React.FC<Props> = ({ userKey }) => {
  const [loadingState, setLoadingState] = useState(LoadingState.Loading);
  const [plans, setPlans] = useState<{ [id: string]: Plan }>({});
  const classes = useStyles();
  useEffect(() => {
    setLoadingState(LoadingState.Loading);
    getPlans(userKey)
      .then((data) => {
        setLoadingState(LoadingState.Success);
        setPlans(data);
      })
      .catch((err) => {
        console.error(err);
        setLoadingState(LoadingState.Failure);
      });
  }, [userKey]);
  if (loadingState === LoadingState.Loading) {
    return <div> Loading... </div>;
  }
  if (loadingState === LoadingState.Failure) {
    return <div> Failed to load plans </div>;
  }
  if (loadingState === LoadingState.Success) {
    return (
      <div className={classes.HomePage}>
        <div className={classes.header}>
          <div className={classes.leftHeader}>
            <h1 className={classes.headerName}> Curricula .fyi</h1>
          </div>
          <div className={classes.rightHeader}>
            <h2> Plan your next 4 years </h2>
          </div>
        </div>
        <div className={classes.mainContent}>
          <h1> Your Plans </h1>
          <div className={classes.plans}>
            {Object.entries(plans).map(([id, plan]) => {
              return <PlanPreview key={id} id={id} plan={plan} />;
            })}
          </div>
          <Link to={`/plans/new`}>
            <Button variant="contained" color="secondary">
              Make New Plan
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  return <div> Not reachable! </div>;
};

export default HomePage;
