import React, { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import { Course } from "./types";
import CourseTile from "./CourseTile";
import { createUseStyles } from "react-jss";

const styles = {
  PlanPage: {
    display: "flex",
    width: "80vw",
    justifyContent: "space-around",
  },
  dropzone: {
    margin: "20px",
    padding: "20px",
    borderRadius: "5px",
  },
} as const;
const useStyles = createUseStyles(styles);

const PlanPage = () => {
  const classes = useStyles();
  const [scheduleCourses, setScheduleCourses] = useState<Course[]>([]);
  const [reqCourses, setReqCourses] = useState<Course[]>([
    {
      name: "Introduction to Computer Science",
      code: "CSCI-UA 101",
    },
    {
      name: "Data Structures",
      code: "CSCI-UA 102",
    },
    {
      name: "Computer Systems Organization",
      code: "CSCI-UA 201",
    },
  ]);
  const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {
    const id = parseInt(result.draggableId);
    if (
      result.source.droppableId === "reqs" &&
      result.destination?.droppableId === "schedule"
    ) {
      setReqCourses(reqCourses.filter((course, i) => i !== id));
      scheduleCourses.splice(result.destination.index, 0, reqCourses[id]);
      setScheduleCourses(scheduleCourses);
    } else if (
      result.source.droppableId === "schedule" &&
      result.destination?.droppableId === "reqs"
    ) {
      setScheduleCourses(scheduleCourses.filter((course, i) => i !== id));
      reqCourses.splice(result.destination.index, 0, scheduleCourses[id]);
      setReqCourses(reqCourses);
    } else if (
      result.source.droppableId === "schedule" &&
      result.destination?.droppableId === "schedule"
    ) {
      const newScheduleCourses = scheduleCourses.filter(
        (course, i) => i !== id
      );
      newScheduleCourses.splice(
        result.destination.index,
        0,
        scheduleCourses[id]
      );
      setScheduleCourses(newScheduleCourses);
    } else if (
      result.source.droppableId === "reqs" &&
      result.destination?.droppableId === "reqs"
    ) {
      const newReqsCourses = reqCourses.filter((course, i) => i !== id);
      newReqsCourses.splice(result.destination.index, 0, reqCourses[id]);
      setReqCourses(newReqsCourses);
    }
    console.log("SOURCE");
    console.log(result.source);
    console.log("DEST");
    console.log(result.destination);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className={classes.PlanPage}>
        <Droppable droppableId="reqs" type="PERSON">
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <div
              ref={provided.innerRef}
              className={classes.dropzone}
              style={{
                transition: "background-color 0.2s",
                backgroundColor: snapshot.isDraggingOver ? "lightgray" : "grey",
              }}
              {...provided.droppableProps}
            >
              {reqCourses.map((course, i) => (
                <Draggable draggableId={String(i)} index={i}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <CourseTile
                        name={course.name}
                        color={{ r: 255, g: 0, b: 0 }}
                        opacity={0.5}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="schedule" type="PERSON">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className={classes.dropzone}
              style={{
                backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
              }}
              {...provided.droppableProps}
            >
              <div>
                <h2> Schedule </h2>
              </div>
              {scheduleCourses.map((course, i) => (
                <Draggable draggableId={String(i)} index={i}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <CourseTile
                        name={course.name}
                        color={{ r: 255, g: 0, b: 0 }}
                        opacity={0.5}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default PlanPage;
