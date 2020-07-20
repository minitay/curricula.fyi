import { Draggable, Droppable } from "react-beautiful-dnd";
import React, { useState } from "react";
import CourseTile from "./CourseTile";
import { Color, Course } from "./types";
import { createUseStyles } from "react-jss";
import { delay } from "./utils";
import ClearIcon from "@material-ui/icons/Clear";

interface Props {
  id: number;
  courses: Course[];
  schoolColor: Color;
  deleteSchedule: () => void;
}

const styles = {
  container: {
    position: "relative",
  },
  SemesterSchedule: {
    background: "#cacaca",
    margin: "20px",
    padding: "20px",
    borderRadius: "5px",
    width: "min(880px, 50vw)",
    overflowX: "scroll",
    display: "flex",
    minHeight: "120px",
    position: "relative",
  },
  deleteButton: {
    position: "absolute",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    right: "0px",
    top: "0px",
    zIndex: "10",
    backgroundColor: "white",
    border: "none",
  },
  course: {
    userSelect: "none",
  },
} as const;
const useStyles = createUseStyles(styles);

const SemesterSchedule: React.FC<Props> = ({
  id,
  courses,
  schoolColor,
  deleteSchedule,
}) => {
  const classes = useStyles();
  const [shouldDisplayDelete, setShouldDisplayDelete] = useState(false);
  return (
    <div className={classes.container}>
      <button
        className={classes.deleteButton}
        onClick={deleteSchedule}
        style={{ display: shouldDisplayDelete ? "block" : "none" }}
      >
        <ClearIcon />
      </button>
      <Droppable droppableId={`semester-${id}`} direction="horizontal">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className={classes.SemesterSchedule}
            onMouseEnter={() => {
              delay(200).then(() => {
                setShouldDisplayDelete(true);
              });
            }}
            onMouseLeave={() => {
              delay(500).then(() => {
                setShouldDisplayDelete(false);
              });
            }}
            {...provided.droppableProps}
          >
            {courses.map((course, i) => {
              const color = course.name.includes("Non CS")
                ? { r: 120, g: 120, b: 120 }
                : schoolColor;
              return (
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
                      className={classes.course}
                    >
                      <CourseTile
                        name={course.name}
                        code={course.code}
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
    </div>
  );
};

export default SemesterSchedule;
