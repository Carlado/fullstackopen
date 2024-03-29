import { useState } from "react";

const App = () => {
  const handleVote = (props) => {
    const pointsObj = { ...points };
    if (pointsObj[selected] === undefined) {
      pointsObj[selected] = 1;
    } else {
      pointsObj[selected]++;
    }

    setPoints(pointsObj);
  };

  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({});

  const getHighestRatedIndex = () => {
    if (!points) return;
    return Object.keys(points).reduce(
      (a, b) => (points[a] > points[b] ? a : b),
      0
    );
  };

  return (
    <div>
      <button
        onClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
      >
        Pick a random one
      </button>
      <p>{anecdotes[selected]}</p>
      <button onClick={handleVote}>Vote for this</button>
      <p>This anectode has {points[selected] || 0} votes</p>

      {points && (
        <p>
          The highest rated anecdote is "{anecdotes[getHighestRatedIndex()]}"
        </p>
      )}
    </div>
  );
};

export default App;
