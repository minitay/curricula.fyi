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
import { MuuriComponent } from "muuri-react";

const styles = {
  PlanCreator: {
    display: "flex",
    flexDirection: "column",
    padding: "30px",
  },
  plan: {
    display: "flex",
    flexDirection: "column",
  },
  terms: {
    overflow: "scroll",
  },
  termSchedule: {
    float: "left",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "1.1em",
    margin: "20px",
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
  termHandle: {
    width: "200px",
    height: "50px",
    border: "1px solid black",
    borderRadius: "10px",
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
    const isFromTerm = fromId.includes("term");
    const isToTerm = toId.includes("term");
    const newPlan = { ...plan };
    if (isFromTerm && toId === "reqs") {
      const [_, fromTermStr] = fromId.split("-");
      const fromTermIndex = parseInt(fromTermStr);
      const transferredItem = newPlan.terms[fromTermIndex].find(
        (item) => item.id === key
      );
      newPlan.terms[fromTermIndex] = newPlan.terms[fromTermIndex].filter(
        (item) => item !== transferredItem
      );
      newPlan.courses = newPlan.courses.concat(transferredItem!);
    }
    if (isToTerm && fromId === "reqs") {
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
    }
    if (isFromTerm && isToTerm) {
      const [_, toTermStr] = toId.split("-");
      const [__, fromTermStr] = fromId.split("-");
      const toTermIndex = parseInt(toTermStr);
      const fromTermIndex = parseInt(fromTermStr);
      const transferredItem = newPlan.terms[fromTermIndex].find(
        (item) => item.id === key
      );
      newPlan.terms[fromTermIndex] = newPlan.terms[fromTermIndex].filter(
        (item) => item !== transferredItem
      );
      newPlan.terms[toTermIndex] = newPlan.terms[toTermIndex].concat(
        transferredItem!
      );
    }
    setPlan(newPlan);
  };
  const terms = [];
  for (let i = 0; i < plan.terms.length; i++) {
    terms.push(
      <div className={classes.termSchedule} key={i}>
        <div className={classes.termHandle}>
          <span className={classes.termIndex}> {i + 1}</span>
        </div>
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
          <MuuriComponent
            dragEnabled={true}
            containerClass={classes.terms}
            dragAxis="x"
            dragHandle={classes.termHandle}
          >
            {terms}
          </MuuriComponent>
        </div>
      </div>
    </div>
  );
};

export default PlanCreator;
