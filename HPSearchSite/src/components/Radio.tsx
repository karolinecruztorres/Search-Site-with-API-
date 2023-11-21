import { useState } from "react";

const Radio = () => {
  const [radioImage, setRadioImage] = useState(
    <img
      src="../src/images/unselected_icon.png"
      alt="Unselected Golden Snitch"
      className="radio-img"
    />
  );

  const changeRadio = (event: any) => {
    event.target.value === "actor"
      ? setRadioImage(
          <img
            src="../src/images/selected_icon.png"
            alt="Selected Golden Snitch"
            className="radio-img"
          />
        )
      : setRadioImage(
          <img
            src="../src/images/unselected_icon.png"
            alt="Unselected Golden Snitch"
            className="radio-img"
          />
        );
  };

  return (
    <div className="radio-area">
      <label htmlFor="character" onClick={changeRadio}>
        Character
        {radioImage}
        <input
          type="radio"
          name="choices"
          id="character"
          className="radio-input"
          value="character"
        />
      </label>

      <label htmlFor="actor" onClick={changeRadio}>
        Actor
        {radioImage}
        <input
          type="radio"
          name="choices"
          id="actor"
          className="radio-input"
          value="actor"
        />
      </label>
    </div>
  );
};

export default Radio;
