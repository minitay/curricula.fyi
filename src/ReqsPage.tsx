import React from "react";
import Requirements from "./Requirements";
import { getReqsTreeHeight } from "./utils";
import { School } from "./types";
import { createUseStyles } from "react-jss";

interface Props {
  slug: string;
  school: School;
  width?: string;
}

const styles = {
  ReqsPage: {
    minWidth: "250px",
    maxWidth: (props: Props) => props.width || "80vw",
  },
};
const useStyles = createUseStyles(styles);

const ReqsPage: React.FC<Props> = ({ slug, school, ...props }) => {
  const classes = useStyles(props);
  return (
    <div className={classes.ReqsPage}>
      <h1>{school.name} </h1>
      <Requirements
        requirements={school.requirements}
        color={school.color}
        start={1}
        totalSteps={getReqsTreeHeight(school.requirements)}
        isOutlined={true}
      />
    </div>
  );
};

export default ReqsPage;
