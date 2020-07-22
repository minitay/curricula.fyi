import React from "react";
import { Plan } from "./types";

interface Props {
  plan: Plan;
}

const PlanPreview: React.FC<Props> = ({ plan }) => {
  return (
    <div>
      <h1> {plan.name} </h1>
    </div>
  );
};

export default PlanPreview;
