import React from "react";
import { School } from "./types";
import Requirements from "./Requirements";
import { getReqsTreeHeight } from "./utils";
import { createUseStyles } from "react-jss";

interface Props {
  school: School;
}

const styles = {
  SchoolPage: {
    width: "80vw",
  },
} as const;
const useStyles = createUseStyles(styles);

const SchoolPage: React.FC<Props> = ({ school }) => {
  const classes = useStyles();
  return (
    <div className={classes.SchoolPage}>
      <h1>{school.name} </h1>
      <div>
        <Requirements
          requirements={school.requirements}
          color={school.color}
          start={1}
          totalSteps={getReqsTreeHeight(school.requirements)}
          isOutlined={true}
        />
      </div>
    </div>
  );
};

export default SchoolPage;
