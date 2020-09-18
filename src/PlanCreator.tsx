import React, { useState } from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Plan } from "./types";
import { createUseStyles } from "react-jss";
import TermSchedule from "./TermSchedule";
import schools from "./schools";
import { Button } from "@material-ui/core";
import NewCourseForm from "./NewCourseForm";
import PlanCourses from "./PlanCourses";
import { GridComponentProps } from "muuri-react/dist/types/interfaces";

const styles = {
  PlanCreator: {
    display: "flex",
    flexDirection: "column",
    padding: "30px",
  },
  plan: {
    display: "flex",
    flexDirection: "column",
    width: "60vw",
  },
  terms: {
    display: "flex",
    flexDirection: "column",
  },
  termSchedule: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.1em",
    padding: "20px",
  },
  termIndex: {
    padding: {
      left: "10px",
      right: "20px",
    },
    color: "#555",
  },
  addTermButton: {
    width: "200px",
  },
} as const;
const useStyles = createUseStyles(styles);

interface Props {
  slug: string;
  plan: Plan;
  setPlan: (p: Plan) => void;
}

enum Visibility {
  Visible,
  NotVisible,
}

const PlanCreator: React.FC<Props> = ({ slug, plan, setPlan }) => {
  const school = schools[slug];
  const classes = useStyles();
  const [courseFormVisibility, setCourseFormVisibility] = useState(
    Visibility.NotVisible
  );
  const handleSend: GridComponentProps["onSend"] = ({ key, fromId, toId }) => {
    if (!fromId || !toId) {
      return;
    }
    if (fromId.includes("term") && toId === "reqs") {
      const [_, fromTermStr] = fromId.split("-");
      const fromTermIndex = parseInt(fromTermStr);
      const newPlan = { ...plan };
      const transferredItem = newPlan.terms[fromTermIndex].find(
        (item) => item.id === key
      );
      newPlan.terms[fromTermIndex] = newPlan.terms[fromTermIndex].filter(
        (item) => item !== transferredItem
      );
      newPlan.courses = newPlan.courses.concat(transferredItem!);
      setPlan(newPlan);
    }
    if (toId.includes("term") && fromId === "reqs") {
      const [_, toTermStr] = toId.split("-");
      const toTermIndex = parseInt(toTermStr);
      const newPlan = { ...plan };
      const transferredItem = newPlan.courses.find((item) => item.id === key);
      newPlan.courses = newPlan.courses.filter(
        (item) => item !== transferredItem
      );
      newPlan.terms[toTermIndex] = newPlan.terms[toTermIndex].concat(
        transferredItem!
      );
      setPlan(newPlan);
    }
  };
  const terms = [];
  for (let i = 0; i < plan.terms.length; i++) {
    terms.push(
      <div className={classes.termSchedule} key={i}>
        <span className={classes.termIndex}> {i + 1}</span>
        <TermSchedule
          deleteSchedule={() => {
            plan.courses = [...plan.terms[i], ...plan.courses];
            plan.terms.splice(i, 1);
            setPlan(plan);
          }}
          schoolColor={school.lightColor}
          key={i}
          id={i}
          courses={plan.terms[i]}
          onSend={handleSend}
        />
      </div>
    );
  }
  return (
    <div>
      {courseFormVisibility === Visibility.Visible && (
        <NewCourseForm
          plan={plan}
          setPlan={setPlan}
          closeForm={() => setCourseFormVisibility(Visibility.NotVisible)}
        />
      )}
      <div className={classes.PlanCreator}>
        <PlanCourses
          showAddCourseForm={() => setCourseFormVisibility(Visibility.Visible)}
          courses={plan.courses}
          school={school}
          onSend={handleSend}
        />
        <div className={classes.plan}>
          <Button
            onClick={() => {
              const newPlan = { ...plan };
              newPlan.terms = [...newPlan.terms, []];
              setPlan(newPlan);
            }}
            className={classes.addTermButton}
            variant="contained"
          >
            <AddCircleOutlineIcon /> Add Term
          </Button>
          <div className={classes.terms}>{terms}</div>
        </div>
      </div>
    </div>
  );
};

export default PlanCreator;
