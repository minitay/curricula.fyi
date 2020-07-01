import React from "react";
import { createUseStyles } from "react-jss";
import { Color } from "./types";

const styles = {
  CourseTile: {
    width: "200px",
    height: "100px",
    fontSize: "0.8em",
    backgroundColor: (props: Props) =>
      `rgba(${props.color.r}, ${props.color.g}, ${props.color.b}, ${props.color.a})`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
  },
  name: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: "50px",
    textAlign: "center",
    width: "80%",
  },
} as const;
const useStyles = createUseStyles(styles);

interface Props {
  name: string;
  code: string;
  color: Color;
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
