import React from "react";
import { createUseStyles } from "react-jss";

const styles = {
  CourseTile: {
    width: "300px",
    height: "150px",
    backgroundColor: (props: Props) => props.color,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
  },
  name: {
    height: "50px",
    textAlign: "center",
    width: "80%",
  },
} as const;
const useStyles = createUseStyles(styles);

interface Props {
  name: string;
  code: string;
  color: string;
}

const CourseTile: React.FC<Props> = ({ name, code, ...props }) => {
  const classes = useStyles(props);
  return (
    <div className={classes.CourseTile}>
      <div>{code}</div>
      <div className={classes.name}>{name}</div>
    </div>
  );
};

export default CourseTile;
