import { useState } from "react";
import { Button } from "./components/Button";
import { Display } from "./components/Display";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleClickGood = () => {
    const newFeedback = good + 1;
    setGood(newFeedback);
    const newTotal = newFeedback + neutral + bad;
    setTotal(newTotal);
    const newAverage = (1 * newFeedback + 0 * neutral + -1 * bad) / newTotal;
    setAverage(newAverage);
    const newPositive = (newFeedback * 100) / newTotal;
    setPositive(newPositive);
  };

  const handleClickNeutral = () => {
    const newFeedback = neutral + 1;
    setNeutral(newFeedback);
    const newTotal = good + newFeedback + bad;
    setTotal(newTotal);
    const newAverage = (1 * good + 0 * newFeedback + -1 * bad) / newTotal;
    setAverage(newAverage);
    const newPositive = (good * 100) / newTotal;
    setPositive(newPositive);
  };

  const handleClickBad = () => {
    const newFeedback = bad + 1;
    setBad(newFeedback);
    const newTotal = good + neutral + newFeedback;
    setTotal(newTotal);
    const newAverage = (1 * good + 0 * neutral + -1 * newFeedback) / newTotal;
    setAverage(newAverage);
    const newPositive = (good * 100) / newTotal;
    setPositive(newPositive);
  };

  return (
    <div>
      <h2>Give feedback</h2>
      <Button onClick={handleClickGood} text="good" />
      <Button onClick={handleClickNeutral} text="neutral" />
      <Button onClick={handleClickBad} text="bad" />

      <h2>Statistics</h2>
      <Display feedback={`good: ${good}`} />
      <Display feedback={`neutral: ${neutral}`} />
      <Display feedback={`bad: ${bad}`} />
      <Display feedback={`all: ${total}`} />
      <Display feedback={`average: ${average}`} />
      <Display feedback={`positive: ${positive}%`} />
    </div>
  );
};

export default App;
