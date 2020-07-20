import React from "react";
import { createUseStyles } from "react-jss";
import { Color } from "./types";
import { DraggableProps } from "react-beautiful-dnd";

const styles = {
  CourseTile: {
    width: "200px",
    height: "100px",
    fontSize: "0.8em",
    backgroundColor: ({ color, opacity }: { color: Color; opacity: number }) =>
      `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
    borderRadius: "5px",
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

interface Props extends Partial<DraggableProps> {
  name: string;
  code?: string;
  color: Color;
  opacity: number;
  ref?: React.Ref<HTMLDivElement>;
}

const CourseTile: React.FC<Props> = ({
  name,
  code,
  color,
  opacity,
  ...props
}) => {
  const classes = useStyles({ color, opacity });
  return (
    <div className={classes.CourseTile} {...props}>
      {code && <div>{code}</div>}
      <div className={classes.name}>{name}</div>
    </div>
  );
};

export default CourseTile;
