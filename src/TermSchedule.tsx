import { Draggable, Droppable } from "react-beautiful-dnd";
import React from "react";
import CourseTile from "./CourseTile";
import { Color, Course, CourseType } from "./types";
import { createUseStyles } from "react-jss";
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
  TermSchedule: {
    background: "#cacaca",
    margin: "5px",
    padding: "25px",
    borderRadius: "5px",
    width: "min(880px, 50vw)",
    overflowX: "auto",
    display: "flex",
    minHeight: "120px",
    position: "relative",
    alignItems: "center",
  },
  deleteButton: {
    background: "#cacaca",
    position: "absolute",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "25px",
    height: "25px",
    right: "5px",
    top: "5px",
    zIndex: "10",
    border: "none",
    "&:hover": {
      background: "#aaa",
    },
  },
  course: {
    userSelect: "none",
  },
  placeholder: {
    fontSize: "1.1em",
    color: "#888",
    paddingLeft: "20px",
  },
} as const;
const useStyles = createUseStyles(styles);

const TermSchedule: React.FC<Props> = ({
  id,
  courses,
  schoolColor,
  deleteSchedule,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <button className={classes.deleteButton} onClick={deleteSchedule}>
        <ClearIcon fontSize="small" classes={{ fontSizeSmall: "10px" }} />
      </button>
      <Droppable droppableId={`term-${id}`} direction="horizontal">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className={classes.TermSchedule}
            {...provided.droppableProps}
          >
            {courses.length === 0 && (
              <div className={classes.placeholder}> Drop a course here </div>
            )}
            {courses.map((course, i) => {
              const color =
                course.type === CourseType.NonCS
                  ? { r: 120, g: 120, b: 120 }
                  : schoolColor;
              return (
                <Draggable key={course.name} draggableId={course.id} index={i}>
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

export default TermSchedule;
