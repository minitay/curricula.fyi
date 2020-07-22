import React from "react";
import { Plan } from "./types";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  plan: Plan;
}

const PlanPreview: React.FC<Props> = ({ id, plan }) => {
  return (
    <Link to={`/plans/${id}`}>
      <h1> {plan.name} </h1>
    </Link>
  );
};

export default PlanPreview;
