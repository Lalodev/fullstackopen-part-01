import { StatisticLine } from "./StatisticLine";

export const Statistics = (props) => {
  return (
    <div>
      <h2>Statistics</h2>
      {props.total < 1 ? (
        <div> No feedback given</div>
      ) : (
        <table>
          <tbody>
            <tr>
              <td>good</td>
              <td>
                <StatisticLine text={props.good} />
              </td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>
                <StatisticLine text={props.neutral} />
              </td>
            </tr>
            <tr>
              <td>bad</td>
              <td>
                <StatisticLine text={props.bad} />
              </td>
            </tr>
            <tr>
              <td>all</td>
              <td>
                <StatisticLine text={props.total} />
              </td>
            </tr>
            <tr>
              <td>average</td>
              <td>
                <StatisticLine text={props.average} />
              </td>
            </tr>
            <tr>
              <td>positive</td>
              <td>
                <StatisticLine text={`${props.positive}%`} />
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};
