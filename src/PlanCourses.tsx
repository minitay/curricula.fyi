import React, { useState } from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Fuse from "fuse.js";
import CourseTile from "./CourseTile";
import { Course, School } from "./types";
import { createUseStyles } from "react-jss";
import { TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Box from "@material-ui/core/Box";
import { MuuriComponent } from "muuri-react";
import { MuuriComponentProps } from "muuri-react/dist/types/interfaces";

interface Props {
  showAddCourseForm: () => void;
  courses: Course[];
  school: School;
  onSend: MuuriComponentProps["onSend"];
}

const useStyles = createUseStyles({
  PlanCourses: {
    background: "#d6e0ea",
    margin: "20px",
    padding: "20px",
    borderRadius: "5px",
    userSelect: "none",
    width: "80vw",
    display: "flex",
    flexDirection: "column",
  },
  addCourseButton: {
    color: "#888888",
    width: "150px",
    height: "80px",
    padding: {
      left: "40px",
      right: "40px",
    },
    backgroundColor: "#dedede",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px dashed #989898",
    margin: "10px",
    boxSizing: "border-box",
    fontSize: "1em",
  },
  coursesContainer: {
    position: "relative",
  },
  courses: {
    display: "flex",
  },
  itemDragging: {
    zIndex: "100",
  },
});

const PlanCourses: React.FC<Props> = ({
  showAddCourseForm,
  courses,
  school,
  onSend,
}) => {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  let myCourses = courses;
  if (query !== "") {
    const fuse = new Fuse(courses, { keys: ["code", "name"] });
    myCourses = fuse.search(query).map((entry) => entry.item);
  }
  return (
    <div className={classes.PlanCourses}>
      <Box m={1}>
        <TextField
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
        />
      </Box>
      <div className={classes.coursesContainer}>
        <button className={classes.addCourseButton} onClick={showAddCourseForm}>
          <AddCircleOutlineIcon /> Add A Course
        </button>
        <MuuriComponent
          id="reqs"
          dragEnabled={true}
          groupIds={["COURSES"]}
          dragSort={{ groupId: "COURSES" }}
          dragFixed={true}
          itemDraggingClass={classes.itemDragging}
          containerClass={classes.coursesContainer}
          onSend={onSend}
        >
          {myCourses.map((course, i) => (
            <CourseTile
              key={course.id}
              name={course.name}
              code={course.code}
              color={school.lightColor}
              type={course.type}
            />
          ))}
        </MuuriComponent>
      </div>
    </div>
  );
};

export default PlanCourses;
