import React from "react";
import { createUseStyles } from "react-jss";
import { Color, Course } from "./types";
import CourseTile from "./CourseTile";

const styles = {
  TileRow: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: {
      top: "20px",
      bottom: "20px",
    },
  },
} as const;
const useStyles = createUseStyles(styles);

interface Props {
  courses: Array<Course>;
  opacity: number;
  color: Color;
}

const TileRow: React.FC<Props> = (props) => {
  const classes = useStyles(props);
  const { courses, color, opacity } = props;
  return (
    <div className={classes.TileRow}>
      {courses.map(({ name, code }) => (
        <CourseTile name={name} code={code} color={color} opacity={opacity} />
      ))}
    </div>
  );
};

export default TileRow;
