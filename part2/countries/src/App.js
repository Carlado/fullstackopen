import React, { useState, useEffect } from "react";
import axios from "axios";
import { Country } from "./components/Country";

function App() {
  const [searchTerm, setNewSearchTerm] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setAllCountries(response.data);
    });
  }, []);

  useEffect(() => {
    const matchingCountries = !searchTerm
      ? allCountries
      : allCountries.filter((country) => {
          return country.name.common
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        });

    setSearchResults(matchingCountries);

    if (matchingCountries.length == 1) {
      setCurrentCountry(matchingCountries[0]);
    }
  }, [allCountries, searchTerm]);

  const handleSearchTermChange = (event) => {
    setNewSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      Country: <input value={searchTerm} onChange={handleSearchTermChange} />
      {searchResults.length > 10 ? (
        <p>Too many countries, please be more specific</p>
      ) : (
        <ul>
          {searchResults.map((country) => {
            return (
              <li key={country.name.fifa}>
                {country.name.common}
                <button
                  type="button"
                  onClick={() => setCurrentCountry(country)}
                >
                  Show more
                </button>
              </li>
            );
          })}
        </ul>
      )}
      <Country country={currentCountry} />
    </div>
  );
}

export default App;
