import React, { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import { Course } from "./types";
import CourseTile from "./CourseTile";
import { createUseStyles } from "react-jss";
import SemesterSchedule from "./SemesterSchedule";
import { cornellCourses } from "./schools";

const styles = {
  PlanPage: {
    display: "flex",
    width: "80vw",
    justifyContent: "space-around",
  },
  requirements: {
    background: "#bababa",
    margin: "20px",
    padding: "20px",
    borderRadius: "5px",
    maxHeight: "100vh",
    userSelect: "none",
  },
} as const;
const useStyles = createUseStyles(styles);

const PlanPage = () => {
  const classes = useStyles();
  const [scheduleCourses, setScheduleCourses] = useState<Course[][]>([
    [],
    [],
    [],
    [],
  ]);
  const [reqCourses, setReqCourses] = useState<Course[]>(cornellCourses);
  const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {
    if (!result.destination) {
      return;
    }
    const [srcType, srcId] = result.source.droppableId.split("-");
    const [destType, destId] = result.destination.droppableId.split("-");
    if (srcType === "reqs" && destType === "semester") {
      const [course] = reqCourses.splice(result.source.index, 1);
      const semester = parseInt(destId);
      setReqCourses(reqCourses);
      scheduleCourses[semester].splice(result.destination.index, 0, course);
      setScheduleCourses(scheduleCourses);
    } else if (srcType === "semester" && destType === "reqs") {
      const semester = parseInt(srcId);
      const [course] = scheduleCourses[semester].splice(result.source.index, 1);
      setScheduleCourses(scheduleCourses);
      reqCourses.splice(result.destination.index, 0, course);
      setReqCourses(reqCourses);
    } else if (srcType === "semester" && destType === "semester") {
      const srcSemester = parseInt(srcId);
      const [course] = scheduleCourses[srcSemester].splice(
        result.source.index,
        1
      );
      const destSemester = parseInt(destId);
      scheduleCourses[destSemester].splice(result.destination.index, 0, course);
      setScheduleCourses(scheduleCourses);
    } else if (srcType === "reqs" && destType === "reqs") {
      const [course] = reqCourses.splice(result.source.index, 1);
      reqCourses.splice(result.destination.index, 0, course);
      setReqCourses(reqCourses);
    }
  };
  const semesters = [];
  for (let i = 0; i < 4; i++) {
    semesters.push(
      <SemesterSchedule key={i} id={i} courses={scheduleCourses[i]} />
    );
  }
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className={classes.PlanPage}>
        <Droppable droppableId="reqs-0">
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <div
              ref={provided.innerRef}
              className={classes.requirements}
              {...provided.droppableProps}
            >
              {reqCourses.map((course, i) => (
                <Draggable
                  key={course.name}
                  draggableId={course.name}
                  index={i}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <CourseTile
                        name={course.name}
                        color={{ r: 255, g: 0, b: 0 }}
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
        {semesters}
      </div>
    </DragDropContext>
  );
};

export default PlanPage;
