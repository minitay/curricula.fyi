import { Draggable, Droppable } from "react-beautiful-dnd";
import React from "react";
import CourseTile from "./CourseTile";
import { Color, Course } from "./types";
import { createUseStyles } from "react-jss";

interface Props {
  id: number;
  courses: Course[];
  schoolColor: Color;
}

const styles = {
  SemesterSchedule: {
    background: "#cacaca",
    margin: "20px",
    padding: "20px",
    borderRadius: "5px",
    width: "880px",
    display: "flex",
    height: "120px",
  },
  course: {
    userSelect: "none",
  },
} as const;
const useStyles = createUseStyles(styles);

const SemesterSchedule: React.FC<Props> = ({ id, courses, schoolColor }) => {
  const classes = useStyles();
  return (
    <Droppable droppableId={`semester-${id}`} direction="horizontal">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          className={classes.SemesterSchedule}
          {...provided.droppableProps}
        >
          {courses.map((course, i) => {
            const color = course.name.includes("Non CS")
              ? { r: 120, g: 120, b: 120 }
              : schoolColor;
            return (
              <Draggable key={course.name} draggableId={course.name} index={i}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={classes.course}
                  >
                    <CourseTile
                      name={course.name}
                      color={color}
                      opacity={0.5}
                    />
                  </div>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default SemesterSchedule;
