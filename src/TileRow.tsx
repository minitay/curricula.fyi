import React from "react";
import { createUseStyles } from "react-jss";
import { Course } from "./types";
import CourseTile from "./CourseTile";

const styles = {
  TileRow: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
} as const;
const useStyles = createUseStyles(styles);

interface Props {
  courses: Array<Course>;
}

const TileRow: React.FC<Props> = (props) => {
  const classes = useStyles(props);
  const { courses } = props;
  return (
    <div className={classes.TileRow}>
      {courses.map(({ name, code, color }) => (
        <CourseTile name={name} code={code} color={color} />
      ))}
    </div>
  );
};

export default TileRow;
