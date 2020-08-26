import React from "react";
import { createUseStyles } from "react-jss";
import { Color, CourseType } from "./types";
import { DraggableProps } from "react-beautiful-dnd";

const styles = {
  CourseTile: {
    width: "150px",
    height: "80px",
    fontSize: "0.8rem",
    backgroundColor: ({ color, type }: Props) => {
      if (type === CourseType.CS) {
        return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
      }
      return "#787878";
    },
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
  type: CourseType;
  ref?: React.Ref<HTMLDivElement>;
}

const CourseTile: React.FC<Props> = ({ name, code, color, type, ...props }) => {
  const classes = useStyles({ color, type });
  return (
    <div title={name} className={classes.CourseTile} {...props}>
      {code && <div>{code}</div>}
      <div className={classes.name}>{name}</div>
    </div>
  );
};

export default CourseTile;
