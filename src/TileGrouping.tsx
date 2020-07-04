import React from "react";
import { createUseStyles } from "react-jss";
import { Color, Course } from "./types";
import CourseTile from "./CourseTile";

const styles = {
  TileGrouping: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    border: "1px solid #888888",
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
  color: Color;
  opacity: number;
}

const TileGrouping: React.FC<Props> = ({ courses, label, color, opacity }) => {
  const classes = useStyles();
  return (
    <div className={classes.TileGrouping}>
      <label> {label} </label>
      <div className={classes.tiles}>
        {courses.map(({ name, code }) => (
          <CourseTile name={name} code={code} color={color} opacity={opacity} />
        ))}
      </div>
    </div>
  );
};

export default TileGrouping;
