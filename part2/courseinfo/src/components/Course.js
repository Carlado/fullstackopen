import Part from "./Part";

const getTotalExercises = (parts) => {
  return parts.reduce((a, b) => {
    return a + b.exercises;
  }, 0);
};

const Course = ({ course }) => {
  return (
    <li key={course.id}>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map((part) => {
          return <Part part={part} />;
        })}
      </ul>
      <p>Total exercises: {getTotalExercises(course.parts)}</p>
    </li>
  );
};

export default Course;
