import { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  gap: 70px;
  margin: 20px 0;
`;

const StyledLabel = styled.label`
  text-align: center;
  font-size: 30px;
  color: rgb(44, 44, 44);
  cursor: pointer;

  &.label-active {
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    color: #dfa221;
    cursor: pointer;
  }
`;

const StyledImage = styled.img`
  height: 40px;
  display: block;
  margin: 5px auto 0 auto;
`;

const StyledInput = styled.input`
  display: none;
`;

const Radio = () => {
  const [radioImage, setRadioImage] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioImage(event.target.value);
  };

  const selected = (
    <StyledImage src="../src/images/selected_icon.png" alt="selected" />
  );

  const unselected = (
    <StyledImage src="../src/images/unselected_icon.png" alt="unselected" />
  );

  return (
    <StyledDiv>
      <StyledLabel
        htmlFor="character"
        className={radioImage === "character" ? "label-active" : ""}
      >
        Character
        {radioImage === "character" ? selected : unselected}
        <StyledInput
          type="radio"
          name="choice"
          id="character"
          value="character"
          onChange={handleOnChange}
        />
      </StyledLabel>

      <StyledLabel
        htmlFor="actor"
        className={radioImage === "actor" ? "label-active" : ""}
      >
        Actor
        {radioImage === "actor" ? selected : unselected}
        <StyledInput
          type="radio"
          name="choice"
          id="actor"
          value="actor"
          onChange={handleOnChange}
        />
      </StyledLabel>
    </StyledDiv>
  );
};

export default Radio;
