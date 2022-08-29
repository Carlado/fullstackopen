const PersonForm = ({ handleSubmit, handleNameChange, handlePhoneChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input onChange={handleNameChange} /> <br />
        number: <input type="tel" onChange={handlePhoneChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
