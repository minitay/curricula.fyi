import React, { useEffect, useState } from "react";
import { Course, LoadingState, Plan } from "./types";
import { db } from "./firebase";
import PlanCreator from "./PlanCreator";
import { Link, useParams } from "react-router-dom";
import schools from "./schools";
import { createUseStyles } from "react-jss";
import { colorToString, getPlan, useWindowSize } from "./utils";
import { CircularProgress } from "@material-ui/core";
import MobilePlanPage from "./MobilePlanPage";

interface Props {
  userKey: string;
}

const styles = {
  requirements: {
    padding: "20px",
    borderRadius: "10px",
    margin: "20px",
  },
  name: {
    padding: "20px",
  },
} as const;
const useStyles = createUseStyles(styles);

const PlanPage: React.FC<Props> = ({ userKey }) => {
  const { id } = useParams();
  const [loadingState, setLoadingState] = useState(LoadingState.Loading);
  const [plan, setPlan] = useState<Plan | undefined>(undefined);
  const classes = useStyles();
  const { width } = useWindowSize();
  useEffect(() => {
    getPlan(userKey, id)
      .then((plan) => {
        setPlan(plan);
        setLoadingState(LoadingState.Success);
      })
      .catch(() => {
        setLoadingState(LoadingState.Failure);
      });
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
    return (
      <div>
        <CircularProgress color="secondary" />
      </div>
    );
  }
  if (loadingState === LoadingState.Success && plan) {
    const school = schools[plan.school];
    if (width! < 700) {
      return <MobilePlanPage plan={plan} school={school} />;
    }
    return (
      <div>
        <h1 className={classes.name}> {plan.name} </h1>
        {school.requirements.length > 0 && (
          <Link
            to={`/reqs/${plan.school}`}
            style={{
              backgroundColor: colorToString(school.lightColor, 0.2),
              border: `1px solid ${colorToString(school.lightColor, 0.5)}`,
            }}
            className={classes.requirements}
          >
            Check out Major Requirements
          </Link>
        )}
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
