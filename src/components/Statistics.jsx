import { StatisticLine } from "./StatisticLine";

export const Statistics = (props) => {
  return (
    <div>
      <h2>Statistics</h2>
      {props.total < 1 ? (
        <div> No feedback given</div>
      ) : (
        <>
          <StatisticLine text={`good: ${props.good}`} />
          <StatisticLine text={`neutral: ${props.neutral}`} />
          <StatisticLine text={`bad: ${props.bad}`} />
          <StatisticLine text={`all: ${props.total}`} />
          <StatisticLine text={`average: ${props.average}`} />
          <StatisticLine text={`positive: ${props.positive}%`} />
        </>
      )}
    </div>
  );
};
