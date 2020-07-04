import React from "react";
import { createUseStyles } from "react-jss";
import { Color, ReqType, Requirement } from "./types";
import TileRow from "./TileRow";
import TileGrouping from "./TileGrouping";

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
}

const Requirements: React.FC<Props> = ({
  requirements,
  start,
  totalSteps,
  color,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.Requirements}>
      {requirements.map((req, i) => {
        const opacity = (0.5 * (start + i)) / totalSteps;
        switch (req.type) {
          case ReqType.Or:
            return (
              <TileRow courses={req.courses} opacity={opacity} color={color} />
            );
          case ReqType.Group:
            return (
              <TileGrouping
                courses={req.courses}
                label={req.label}
                opacity={opacity}
                color={color}
              />
            );
          case ReqType.Sequence:
            return (
              <div className={classes.sequence}>
                <label> {req.label} </label>
                <Requirements
                  requirements={req.requirements}
                  start={start + i}
                  totalSteps={totalSteps}
                  color={color}
                />
              </div>
            );
          case ReqType.Text:
            return (
              <div className={classes.text}>
                <label> {req.label}</label>
                <p className={classes.textContent}>{req.content}</p>
                {req.courses && (
                  <TileRow
                    courses={req.courses}
                    color={color}
                    opacity={opacity}
                  />
                )}
              </div>
            );
          default:
            return <div> Error! This should not be reachable </div>;
        }
      })}
    </div>
  );
};

export default Requirements;
