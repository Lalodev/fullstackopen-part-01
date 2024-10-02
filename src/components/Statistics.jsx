import React from "react";
import { Display } from "./Display";

export const Statistics = (props) => {
  return (
    <div>
      <h2>Statistics</h2>
      <Display feedback={`good: ${props.good}`} />
      <Display feedback={`neutral: ${props.neutral}`} />
      <Display feedback={`bad: ${props.bad}`} />
      <Display feedback={`all: ${props.total}`} />
      <Display feedback={`average: ${props.average}`} />
      <Display feedback={`positive: ${props.positive}%`} />
    </div>
  );
};
