import React, { useEffect, useState } from "react";
import { Course, LoadingState, Plan } from "./types";
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
      const { name, school, terms, courses } = ref.data() as any;
      let termsArray: Course[][] = [];
      Object.keys(terms).forEach((i: string) => {
        termsArray[parseInt(i)] = terms[i];
      });
      setPlan({ name, school, courses, terms: termsArray });
      setLoadingState(LoadingState.Success);
    })();
  }, [userKey, id]);

  function handlePlanUpdate(plan: Plan) {
    let termObj: { [s: string]: Course[] } = {};
    plan.terms.forEach((term, i) => {
      termObj[i] = term;
    });
    db.collection("users")
      .doc(userKey)
      .collection("plans")
      .doc(id)
      .update({ terms: termObj, courses: plan.courses });
    setPlan({ ...plan });
  }
  if (!id) {
    return <div> Invalid id, return home </div>;
  }
  if (loadingState === LoadingState.Loading) {
    return <div> Loading...</div>;
  }
  if (loadingState === LoadingState.Success && plan) {
    return (
      <div>
        <h1> {plan.name} </h1>{" "}
        <PlanCreator
          slug={plan.school}
          plan={plan}
          setPlan={handlePlanUpdate}
        />
      </div>
    );
  }
  return <div> Error </div>;
};

export default PlanPage;
