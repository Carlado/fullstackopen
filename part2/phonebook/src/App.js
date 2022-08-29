import { useEffect, useState } from "react";
import axios from "axios";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import PersonFilter from "./PersonFilter";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
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

    setPersons([...persons, { name: newName, number: newNumber }]);
  };

  const filteredPersons = searchTerm
    ? persons.filter((person) => {
        return person.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonFilter handleNameSearch={handleNameSearch} />
      <PersonForm
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
