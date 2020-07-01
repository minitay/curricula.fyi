import React from "react";
import { createUseStyles } from "react-jss";
import { ReqType, Requirement } from "./types";
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
} as const;
const useStyles = createUseStyles(styles);

interface Props {
  requirements: Array<Requirement>;
}

const Requirements: React.FC<Props> = ({ requirements }) => {
  const classes = useStyles();
  return (
    <div className={classes.Requirements}>
      {requirements.map((req) => {
        switch (req.type) {
          case ReqType.Or:
            return <TileRow courses={req.courses} />;
          case ReqType.Group:
            return <TileGrouping courses={req.courses} label={req.label} />;
          case ReqType.Sequence:
            return (
              <div className={classes.sequence}>
                <label> {req.label} </label>
                <Requirements requirements={req.requirements} />
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
