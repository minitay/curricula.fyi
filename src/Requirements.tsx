import React from "react";
import { createUseStyles } from "react-jss";
import { Color, ReqType, Requirement } from "./types";
import TileRow from "./TileRow";
import TileGrouping from "./TileGrouping";
import { getReqsTreeHeight } from "./utils";
import CourseTile from "./CourseTile";

const styles = {
  Requirements: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sequence: {
    border: "1px solid #888888",
    padding: "20px",
    margin: "20px",
  },
  text: {
    border: "1px solid #888888",
    padding: "20px",
    margin: "20px",
  },
  textContent: {
    maxWidth: "600px",
  },
} as const;
const useStyles = createUseStyles(styles);

interface Props {
  requirements: Array<Requirement>;
  start: number;
  totalSteps: number;
  color: Color;
  isOutlined: boolean;
}

const Requirements: React.FC<Props> = ({
  requirements,
  start,
  totalSteps,
  color,
  isOutlined,
}) => {
  let i = 0;
  const classes = useStyles();
  return (
    <div className={classes.Requirements}>
      {requirements.map((req) => {
        const opacity = (0.5 * (start + i)) / totalSteps;
        let component;
        switch (req.type) {
          case ReqType.One:
            component = (
              <CourseTile
                name={req.course.name}
                color={color}
                opacity={opacity}
              />
            );
            i += 1;
            break;
          case ReqType.Or:
            component = (
              <TileRow courses={req.courses} opacity={opacity} color={color} />
            );
            i += 1;
            break;
          case ReqType.Group:
            component = (
              <TileGrouping
                isOutlined={isOutlined}
                courses={req.courses}
                label={req.label}
                opacity={opacity}
                color={color}
              />
            );
            i += 1;
            break;
          case ReqType.Sequence:
            component = (
              <div className={classes.sequence}>
                <label> {req.label} </label>
                <Requirements
                  requirements={req.requirements}
                  start={start + i}
                  totalSteps={totalSteps}
                  color={color}
                  isOutlined={false}
                />
              </div>
            );
            i += getReqsTreeHeight(req.requirements);
            break;
          case ReqType.Text:
            component = (
              <div className={classes.text}>
                <label> {req.label}</label>
                <p className={classes.textContent}>{req.content}</p>
                {req.courses && (
                  <TileGrouping
                    courses={req.courses}
                    color={color}
                    opacity={opacity}
                    isOutlined={false}
                  />
                )}
              </div>
            );
            i += 1;
            break;
          default:
            component = <div> Error! This should not be reachable </div>;
        }
        return component;
      })}
    </div>
  );
};

export default Requirements;
