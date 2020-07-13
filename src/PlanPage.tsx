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

const PlanPage = () => {
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
      setScheduleCourses([...scheduleCourses, reqCourses[id]]);
    } else if (
      result.source.droppableId === "schedule" &&
      result.destination?.droppableId === "reqs"
    ) {
      setScheduleCourses(scheduleCourses.filter((course, i) => i !== id));
      setReqCourses([...reqCourses, scheduleCourses[id]]);
    }
    console.log("DRAG END");
    console.log(result);
    console.log(provided);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="reqs" type="PERSON">
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <div
              ref={provided.innerRef}
              style={{
                backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
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
                      <h3> {course.name}</h3>
                      <h4> {course.code}</h4>
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
                      <h3> {course.name}</h3>
                      <h4> {course.code}</h4>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default PlanPage;
