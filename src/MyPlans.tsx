import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import PlanPreview from "./PlanPreview";
import { LoadingState, Plan } from "./types";
import { db } from "./firebase";
import { CircularProgress } from "@material-ui/core";

const styles = {
  MyPlans: {
    width: "80vw",
    display: "flex",
    flexWrap: "wrap",
  },
  loading: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  failure: {
    paddingBottom: "40px",
    fontSize: "1.1em",
  },
} as const;
const useStyles = createUseStyles(styles);

interface Props {
  userKey: string;
}

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

const MyPlans: React.FC<Props> = ({ userKey }) => {
  const classes = useStyles();
  const [plans, setPlans] = useState<{ [id: string]: Plan }>({});
  const [loadingState, setLoadingState] = useState(LoadingState.Loading);
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
    return (
      <div className={classes.loading}>
        <CircularProgress color="secondary" />
      </div>
    );
  }
  if (loadingState === LoadingState.Failure) {
    return (
      <div className={classes.failure}>
        Failed to load plans <a href="/"> Try again? </a>
      </div>
    );
  }
  return (
    <div className={classes.MyPlans}>
      {Object.entries(plans).map(([id, plan]) => {
        return <PlanPreview key={id} id={id} plan={plan} />;
      })}
    </div>
  );
};
export default MyPlans;
