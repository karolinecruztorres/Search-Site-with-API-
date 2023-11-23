import { useState } from "react";

const Radio = () => {
  const [radioImage, setRadioImage] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioImage(event.target.value);
  };

  const selected = (
    <img
      src="../src/images/selected_icon.png"
      alt="selected"
      className="radio-img"
    />
  );

  const unselected = (
    <img
      src="../src/images/unselected_icon.png"
      alt="unselected"
      className="radio-img"
    />
  );

  return (
    <div className="radio-area">
      <label
        htmlFor="character"
        className={radioImage === "character" ? "label-active" : "label-nonActive"}
      >
        Character
        {radioImage === "character" ? selected : unselected}
        <input
          type="radio"
          name="choice"
          id="character"
          className="radio-input"
          value="character"
          onChange={handleOnChange}
        />
      </label>

      <label
        htmlFor="actor"
        className={radioImage === "actor" ? "label-active" : "label-nonActive"}
      >
        Actor
        {radioImage === "actor" ? selected : unselected}
        <input
          type="radio"
          name="choice"
          id="actor"
          className="radio-input"
          value="actor"
          onChange={handleOnChange}
        />
      </label>
    </div>
  );
};

export default Radio;
