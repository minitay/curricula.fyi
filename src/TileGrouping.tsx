import React from "react";
import { createUseStyles } from "react-jss";
import { Course } from "./types";
import CourseTile from "./CourseTile";

const styles = {
  TileGrouping: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    border: "1px solid #323232",
    margin: "20px",
  },
  tiles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
} as const;
const useStyles = createUseStyles(styles);

interface Props {
  courses: Array<Course>;
  label: string;
}

const TileGrouping: React.FC<Props> = ({ courses, label }) => {
  const classes = useStyles();
  return (
    <div className={classes.TileGrouping}>
      <label> {label} </label>
      <div className={classes.tiles}>
        {courses.map(({ name, code, color }) => (
          <CourseTile name={name} code={code} color={color} />
        ))}
      </div>
    </div>
  );
};

export default TileGrouping;
