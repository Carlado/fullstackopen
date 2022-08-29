const Persons = ({ persons }) => {
  return (
    <>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => {
          return (
            <li key={person.name}>
              Name: {person.name} Phone: {person.number}{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Persons;
