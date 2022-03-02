import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, bad, neutral }) => {
  const total = good + bad + neutral;
  return (
    <div>
      {total > 0 ? (
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={(good + bad * -1) / total} />
            <StatisticLine text="percentage" value={(good * 100) / total} />
          </tbody>
        </table>
      ) : (
        <p>No reviews yet</p>
      )}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="bad" onClick={() => setBad(bad + 1)} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
