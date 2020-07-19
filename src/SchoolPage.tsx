import React from "react";
import { School } from "./types";
import Requirements from "./Requirements";
import { getReqsTreeHeight } from "./utils";
import { createUseStyles } from "react-jss";

interface Props {
  school: School;
  width?: string;
}

const styles = {
  SchoolPage: {
    minWidth: "250px",
    maxWidth: (props: Props) => props.width || "80vw",
  },
} as const;
const useStyles = createUseStyles(styles);

const SchoolPage: React.FC<Props> = (props) => {
  const classes = useStyles(props);
  const { school } = props;
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
