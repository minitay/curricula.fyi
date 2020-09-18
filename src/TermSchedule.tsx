import React from "react";
import CourseTile from "./CourseTile";
import { Color, Course } from "./types";
import { createUseStyles } from "react-jss";
import ClearIcon from "@material-ui/icons/Clear";
import { MuuriComponent } from "muuri-react";
import { MuuriComponentProps } from "muuri-react/dist/types/interfaces";

interface Props {
  id: number;
  courses: Course[];
  schoolColor: Color;
  deleteSchedule: () => void;
  onSend: MuuriComponentProps["onSend"];
}

const styles = {
  container: {
    position: "relative",
  },
  TermSchedule: {
    background: "#d6e0ea",
    margin: "5px",
    padding: "25px",
    borderRadius: "5px",
    width: "min(880px, 50vw)",
    minHeight: "100px",
  },
  deleteButton: {
    background: "#d6e0ea",
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
      background: "#c4ced8",
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
  itemDragging: {
    zIndex: "100",
    cursor: "move",
  },
} as const;
const useStyles = createUseStyles(styles);

const TermSchedule: React.FC<Props> = ({
  id,
  courses,
  schoolColor,
  deleteSchedule,
  onSend,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <button className={classes.deleteButton} onClick={deleteSchedule}>
        <ClearIcon fontSize="small" classes={{ fontSizeSmall: "10px" }} />
      </button>
      <MuuriComponent
        id={`term-${id}`}
        dragEnabled={true}
        groupIds={["COURSES"]}
        dragSort={{ groupId: "COURSES" }}
        dragFixed={true}
        itemDraggingClass={classes.itemDragging}
        containerClass={classes.TermSchedule}
        onSend={onSend}
      >
        {courses.map((course, i) => (
          <CourseTile
            key={course.id}
            name={course.name}
            code={course.code}
            color={schoolColor}
            type={course.type}
          />
        ))}
      </MuuriComponent>
    </div>
  );
};

export default TermSchedule;
