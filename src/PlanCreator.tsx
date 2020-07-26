import React, { useState } from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { v4 as uuid } from "uuid";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import { Course, CourseType, Plan } from "./types";
import CourseTile from "./CourseTile";
import { createUseStyles } from "react-jss";
import TermSchedule from "./TermSchedule";
import schools from "./schools";
import { Button } from "@material-ui/core";
import NewCourseForm from "./NewCourseForm";

const styles = {
  PlanCreator: {
    display: "flex",
    padding: "30px",
  },
  requirements: {
    background: "#bababa",
    margin: "20px",
    padding: "20px",
    borderRadius: "5px",
    maxHeight: "80vh",
    userSelect: "none",
    overflowY: "scroll",
  },
  plan: {
    display: "flex",
    flexDirection: "column",
    width: "60vw",
  },
  terms: {
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
    height: "calc(80vh - 100px)",
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
  addCourseButton: {
    color: "#888888",
    width: "200px",
    height: "100px",
    backgroundColor: "#dedede",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px dashed #989898",
    margin: "10px",
    boxSizing: "border-box",
    fontSize: "1.1em",
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
          schoolColor={school.color}
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
          closeForm={() => setCourseFormVisibility(Visibility.NotVisible)}
        />
      )}
      <div className={classes.PlanCreator}>
        <div className={classes.requirements}>
          <button
            className={classes.addCourseButton}
            onClick={() => setCourseFormVisibility(Visibility.Visible)}
          >
            <AddCircleOutlineIcon /> Add A Course
          </button>
          <Droppable
            droppableId="reqs-1"
            isDropDisabled={true}
            renderClone={(provided, snapshot, rubric) => (
              <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                <CourseTile
                  name="Non CS"
                  color={{ r: 120, g: 120, b: 120 }}
                  opacity={0.5}
                />
              </div>
            )}
          >
            {(
              provided: DroppableProvided,
              snapshot: DroppableStateSnapshot
            ) => {
              if (snapshot.draggingFromThisWith === "Non CS") {
                return (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <CourseTile
                      name={"Non CS"}
                      color={{ r: 120, g: 120, b: 120 }}
                      opacity={0.5}
                    />
                    <div style={{ display: "none" }}>
                      {" "}
                      {provided.placeholder}
                    </div>
                  </div>
                );
              }
              return (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <Draggable key={"Non CS"} draggableId={"Non CS"} index={-1}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <CourseTile
                          name={"Non CS"}
                          color={{ r: 120, g: 120, b: 120 }}
                          opacity={0.5}
                        />
                      </div>
                    )}
                  </Draggable>
                </div>
              );
            }}
          </Droppable>
          <Droppable droppableId="reqs-0" direction="vertical">
            {(
              provided: DroppableProvided,
              snapshot: DroppableStateSnapshot
            ) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {plan.courses.map((course, i) => (
                  <Draggable key={i} draggableId={course.id} index={i}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <CourseTile
                          name={course.name}
                          code={course.code}
                          color={school.color}
                          opacity={0.5}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
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
