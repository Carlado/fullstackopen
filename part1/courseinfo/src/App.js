const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Content = ({ parts }) => {
  const items = parts.map((part, i) => {
    return (
      <li key={i}>
        {part.name} {part.exercises}
      </li>
    );
  });

  return <ul>{items}</ul>;
};

const Totals = ({ parts }) => {
  console.log(parts);
  const total = parts.reduce((a, b) => {
    return a + b["exercises"];
  }, 0);
  return <p>Total number of exercises: {total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Totals parts={course.parts} />
    </div>
  );
};

export default App;
