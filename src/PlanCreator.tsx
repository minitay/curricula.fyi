import React, { useState } from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { v4 as uuid } from "uuid";
import {
  DragDropContext,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import { Course, CourseType, Plan } from "./types";
import { createUseStyles } from "react-jss";
import TermSchedule from "./TermSchedule";
import schools from "./schools";
import { Button } from "@material-ui/core";
import NewCourseForm from "./NewCourseForm";
import PlanCourses from "./PlanCourses";

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
    height: "800px",
    overflowY: "scroll",
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
  const [nonCSCount, setNonCSCount] = useState(1);
  const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {
    if (!result.destination) {
      return;
    }
    const [srcType, srcId] = result.source.droppableId.split("-");
    const [destType, destId] = result.destination.droppableId.split("-");
    // Non CS course chosen
    if (srcType === "reqs" && srcId === "1") {
      const course: Course = {
        id: uuid(),
        name: `Non CS`,
        type: CourseType.NonCS,
      };
      const term = parseInt(destId);
      setNonCSCount(nonCSCount + 1);
      plan.terms[term].splice(result.destination.index, 0, course);
    } else if (srcType === "reqs" && destType === "term") {
      const [course] = plan.courses.splice(result.source.index, 1);
      const term = parseInt(destId);
      plan.terms[term].splice(result.destination.index, 0, course);
    } else if (srcType === "term" && destType === "reqs") {
      const term = parseInt(srcId);
      const [course] = plan.terms[term].splice(result.source.index, 1);
      plan.courses.splice(result.destination.index, 0, course);
    } else if (srcType === "term" && destType === "term") {
      const srcSemester = parseInt(srcId);
      const [course] = plan.terms[srcSemester].splice(result.source.index, 1);
      const destSemester = parseInt(destId);
      plan.terms[destSemester].splice(result.destination.index, 0, course);
    } else if (srcType === "reqs" && destType === "reqs") {
      const [course] = plan.courses.splice(result.source.index, 1);
      plan.courses.splice(result.destination.index, 0, course);
    }
    setPlan(plan);
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
        />
      </div>
    );
  }
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
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
    </DragDropContext>
  );
};

export default PlanCreator;
