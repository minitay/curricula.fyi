import React, { useEffect, useState } from "react";
import PlanPreview from "./PlanPreview";
import { Link } from "react-router-dom";
import { LoadingState, Plan } from "./types";
import { db } from "./firebase";
import { Button } from "@material-ui/core";

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

const MyPlansPage: React.FC<Props> = ({ userKey }) => {
  const [loadingState, setLoadingState] = useState(LoadingState.Loading);
  const [plans, setPlans] = useState<{ [id: string]: Plan }>({});
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
      <div>
        <h1> Your Plans </h1>
        {Object.entries(plans).map(([id, plan]) => {
          return <PlanPreview key={id} id={id} plan={plan} />;
        })}
        <Link to={`/plans/new`}>
          <Button variant="contained" color="secondary">
            Make New Plan
          </Button>
        </Link>
      </div>
    );
  }
  return <div> Not reachable! </div>;
};

export default MyPlansPage;
