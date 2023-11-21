const Select = () => {
  return (
    <label htmlFor="selectCharacter">
      All options:
      <select
        className="select"
        id="selectCharacter"
        placeholder="Select the one you search for"
      >
        <option className="option" value="Harry Potter">
          Harry Potter
        </option>
        <option className="option" value="Hermione Granger">
          Hermione Granger
        </option>
      </select>
    </label>
  );
};

export default Select;
