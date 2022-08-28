import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const handleNameSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      persons.some((person) => {
        return person.name === newName;
      })
    ) {
      alert(`${newName} already exists`);
      return;
    }

    setPersons([...persons, { name: newName, phone: newPhone }]);
  };

  const filteredPersons = searchTerm
    ? persons.filter((person) => {
        return person.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      Search name: <input onChange={handleNameSearch} />
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange} /> <br />
          number: <input type="tel" onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => {
          return (
            <li key={person.name}>
              Name: {person.name} Phone: {person.phone}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
