import React, { useState } from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import { Course, School } from "./types";
import CourseTile from "./CourseTile";
import { createUseStyles } from "react-jss";
import SemesterSchedule from "./SemesterSchedule";

const styles = {
  PlanPage: {
    display: "flex",
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
  semesters: {
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
    height: "calc(80vh - 100px)",
  },
  semesterSchedule: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.1em",
    padding: "20px",
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
  },
  addSemesterButton: {
    border: "none",
    fontSize: "1.1em",
    color: "#555",
    width: "20vw",
    minWidth: "200px",
    backgroundColor: "#dedede",
    display: "flex",
    alignItems: "center",
    margin: "20px",
    padding: "20px",
    borderRadius: "5px",
    transition: "filter 0.2s",
    "&:hover": {
      backgroundColor: "#cecece",
    },
  },
} as const;
const useStyles = createUseStyles(styles);

interface Props {
  school: School;
}

const PlanPage: React.FC<Props> = ({ school }) => {
  const classes = useStyles();
  const [nonCSCount, setNonCSCount] = useState(1);
  const [semesterCount, setSemesterCount] = useState(8);
  const [scheduleCourses, setScheduleCourses] = useState<Course[][]>([
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);
  const [reqCourses, setReqCourses] = useState<Course[]>(school.courses);
  const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {
    if (!result.destination) {
      return;
    }
    const [srcType, srcId] = result.source.droppableId.split("-");
    const [destType, destId] = result.destination.droppableId.split("-");
    // Non CS course chosen
    if (srcType === "reqs" && srcId === "1") {
      const course: Course = {
        name: `Non CS ${nonCSCount}`,
      };
      const semester = parseInt(destId);
      setNonCSCount(nonCSCount + 1);
      scheduleCourses[semester].splice(result.destination.index, 0, course);
      setScheduleCourses(scheduleCourses);
    } else if (srcType === "reqs" && destType === "semester") {
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
  for (let i = 0; i < semesterCount; i++) {
    semesters.push(
      <div className={classes.semesterSchedule}>
        {i + 1}
        <SemesterSchedule
          deleteSchedule={() => {
            scheduleCourses.splice(i, 1);
            setScheduleCourses(scheduleCourses);
            setSemesterCount(semesterCount - 1);
          }}
          schoolColor={school.color}
          key={i}
          id={i}
          courses={scheduleCourses[i]}
        />
      </div>
    );
  }
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className={classes.PlanPage}>
        <div className={classes.requirements}>
          <div className={classes.addCourseButton}>
            <AddCircleOutlineIcon /> Add A Course
          </div>
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
          <button
            onClick={() => {
              setSemesterCount(semesterCount + 1);
              setScheduleCourses((prevState) => [[], ...prevState]);
            }}
            className={classes.addSemesterButton}
          >
            <AddCircleOutlineIcon /> Add Semester{" "}
          </button>
          <div className={classes.semesters}>{semesters}</div>
        </div>
      </div>
    </DragDropContext>
  );
};

export default PlanPage;
