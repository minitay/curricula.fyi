import React, { useEffect, useState } from "react";
import { LoadingState, Plan } from "./types";
import { db } from "./firebase";
import PlanCreator from "./PlanCreator";
import { useParams } from "react-router-dom";

interface Props {
  userKey: string;
}

const PlanPage: React.FC<Props> = ({ userKey }) => {
  const { id } = useParams();
  const [loadingState, setLoadingState] = useState(LoadingState.Loading);
  const [plan, setPlan] = useState<Plan | undefined>(undefined);
  useEffect(() => {
    (async function () {
      const ref = await db
        .collection("users")
        .doc(userKey)
        .collection("plans")
        .doc(id)
        .get();
      setPlan(ref.data() as Plan);
      setLoadingState(LoadingState.Success);
    })();
  }, [userKey, id]);
  if (!id) {
    return <div> Invalid id, return home </div>;
  }
  if (loadingState === LoadingState.Loading) {
    return <div> Loading...</div>;
  }
  if (loadingState === LoadingState.Success && plan) {
    return (
      <div>
        <h1> {plan.name} </h1> <PlanCreator slug={plan.school} plan={plan} />
      </div>
    );
  }
  return <div> Error </div>;
};

export default PlanPage;
