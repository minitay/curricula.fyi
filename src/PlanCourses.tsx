import React, { useState } from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Fuse from "fuse.js";
import {
  Draggable,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";
import CourseTile from "./CourseTile";
import { Course, CourseType, School } from "./types";
import { createUseStyles } from "react-jss";
import { TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useInView } from "react-intersection-observer";
import Box from "@material-ui/core/Box";

interface Props {
  showAddCourseForm: () => void;
  courses: Course[];
  school: School;
}

const useStyles = createUseStyles({
  PlanCourses: {
    background: "#d6e0ea",
    margin: "20px",
    padding: "20px",
    borderRadius: "5px",
    userSelect: "none",
    width: "80vw",
    overflowX: "scroll",
    display: "flex",
    flexDirection: "column",
  },
  addCourseButton: {
    color: "#888888",
    width: "150px",
    height: "80px",
    padding: {
      left: "40px",
      right: "40px",
    },
    backgroundColor: "#dedede",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px dashed #989898",
    margin: "10px",
    boxSizing: "border-box",
    fontSize: "1em",
  },
  coursesContainer: {
    display: "flex",
  },
  courses: {
    display: "flex",
  },
});

const PlanCourses: React.FC<Props> = ({
  showAddCourseForm,
  courses,
  school,
}) => {
  const [ref, inView, entry] = useInView({
    threshold: 0.5,
  });
  const classes = useStyles(inView);
  const [query, setQuery] = useState("");
  let myCourses = courses;
  if (query !== "") {
    const fuse = new Fuse(courses, { keys: ["code", "name"] });
    myCourses = fuse.search(query).map((entry) => entry.item);
  }
  return (
    <div className={classes.PlanCourses} ref={ref}>
      <Box m={1}>
        <TextField
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
        />
      </Box>
      <div className={classes.coursesContainer}>
        <button className={classes.addCourseButton} onClick={showAddCourseForm}>
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
                type={CourseType.NonCS}
                color={{ r: 120, g: 120, b: 120, a: 0.5 }}
              />
            </div>
          )}
        >
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => {
            if (snapshot.draggingFromThisWith === "Non CS") {
              return (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <CourseTile
                    name={"Non CS"}
                    type={CourseType.NonCS}
                    color={{ r: 120, g: 120, b: 120, a: 0.5 }}
                  />
                  <div style={{ display: "none" }}> {provided.placeholder}</div>
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
                        type={CourseType.NonCS}
                        name={"Non CS"}
                        color={{ r: 120, g: 120, b: 120, a: 0.5 }}
                      />
                    </div>
                  )}
                </Draggable>
              </div>
            );
          }}
        </Droppable>
        <Droppable direction="horizontal" droppableId="reqs-0">
          {(provided: DroppableProvided) => (
            <div
              className={classes.courses}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {myCourses.map((course, i) => (
                <Draggable key={i} draggableId={course.id} index={i}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <CourseTile
                        name={course.name}
                        code={course.code}
                        color={school.lightColor}
                        type={course.type}
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
    </div>
  );
};

export default PlanCourses;
