export const Country = ({ country }) => {
  if (Object.entries(country).length < 1) {
    return null;
  }

  return (
    <div>
      <h1>{country.name.common}</h1>
      <ul>
        {Object.keys(country.languages).map((key) => {
          return <li key={country.languages[key]}>{country.languages[key]}</li>;
        })}
      </ul>
    </div>
  );
};
