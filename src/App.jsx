import { useState } from "react";
import { Button } from "./components/Button";
import { Display } from "./components/Display";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => setGood(good + 1);

  const handleClickNeutral = () => setNeutral(neutral + 1);

  const handleClickBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give feedback</h1>

      <Button onClick={handleClickGood} text="good" />
      <Button onClick={handleClickNeutral} text="neutral" />
      <Button onClick={handleClickBad} text="bad" />
      <h2>Statistics</h2>
      <Display feedback={`good: ${good}`} />
      <Display feedback={`neutral: ${neutral}`} />
      <Display feedback={`bad: ${bad}`} />
    </div>
  );
};

export default App;
