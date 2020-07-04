import React from "react";
import { School } from "./types";
import Requirements from "./Requirements";

interface Props {
  school: School;
}

const SchoolPage: React.FC<Props> = ({ school }) => {
  return (
    <div>
      <h1>{school.name} </h1>
      <div>
        <Requirements
          requirements={school.requirements}
          color={school.color}
          start={1}
          totalSteps={10}
        />
      </div>
    </div>
  );
};

export default SchoolPage;
