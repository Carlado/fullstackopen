import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [searchTerm, setNewSearchTerm] = useState("");
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setAllCountries(response.data);
    });
  }, []);

  const handleSearchTermChange = (event) => {
    setNewSearchTerm(event.target.value);
  };

  const matchingCountries = !searchTerm
    ? allCountries
    : allCountries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });

  const single = matchingCountries.length === 1 ? matchingCountries[0] : "";
  console.log(single);

  return (
    <div className="App">
      Country: <input value={searchTerm} onChange={handleSearchTermChange} />
      {matchingCountries.length > 10 ? (
        <p>Too many countries, please be more specific</p>
      ) : (
        <ul>
          {matchingCountries.map((country) => {
            return <li>{country.name.common}</li>;
          })}
        </ul>
      )}
      {single && (
        <div>
          <h1>{single.name.common}</h1>
          <ul>
            {Object.keys(single.languages).map((key) => {
              return <li>{single.languages[key]}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
