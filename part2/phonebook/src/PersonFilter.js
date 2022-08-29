const PersonFilter = ({ handleNameSearch }) => {
  return (
    <>
      Filter:
      <input onChange={handleNameSearch} />
    </>
  );
};

export default PersonFilter;
