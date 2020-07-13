import React from "react";
import { createUseStyles } from "react-jss";
import { Color, Course } from "./types";
import CourseTile from "./CourseTile";
import { useWindowSize } from "./utils";

const styles = {
  TileRow: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  or: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  "@media(max-width: 1000px)": {
    TileRow: {
      padding: {
        top: "20px",
        bottom: "20px",
      },
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
  const { width } = useWindowSize();
  const classes = useStyles(props);
  const { courses, color, opacity } = props;
  return (
    <div className={classes.TileRow}>
      {width! < 1000 && courses.length > 1 && <span> One of: </span>}
      <div className={classes.row}>
        {courses.map(({ name, code }) => {
          return (
            <div>
              <CourseTile
                name={name}
                code={code}
                color={color}
                opacity={opacity}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TileRow;
