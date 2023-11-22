import { useState } from "react";
import styled from "styled-components";

const LabelStyle = styled.label`
  text-align: center;
  font-size: 30px;
  color: rgb(44, 44, 44);
  cursor: pointer;
  
  &:active {
    color: goldenrod;
  }
`;

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
      <LabelStyle htmlFor="character">
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
      </LabelStyle>

      <LabelStyle htmlFor="actor">
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
      </LabelStyle>
    </div>
  );
};

export default Radio;
