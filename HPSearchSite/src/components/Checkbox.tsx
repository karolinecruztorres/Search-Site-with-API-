const Checkbox = () => {
  return (
    <div className="check-area">
      <label htmlFor="character">
        Character
        <input
          type="checkbox"
          name="character-check"
          id="character"
          className="checkbox-input"
        />
      </label>

      <label htmlFor="actor">
        Actor
        <input
          type="checkbox"
          name="actor-check"
          id="actor"
          className="checkbox-input"
        />
      </label>
    </div>
  );
};

export default Checkbox;
