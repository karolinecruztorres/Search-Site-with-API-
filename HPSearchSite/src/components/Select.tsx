import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: 36px;
  font-weight: bold;
`;

const StyledSelect = styled.select`
  font-family: "Bigelow Rules", serif;
  font-size: 30px;
  margin: 0 0 20px 15px;
  padding: 2px 5px;
  width: 385px;
  border: none;
  background-color: rgba(183, 156, 109, 0.3);
  cursor: pointer;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.8;
  }
`;

const Select = () => {
  return (
    <StyledLabel htmlFor="selectCharacter">
      All options:
      <StyledSelect
        id="selectCharacter"
        placeholder="Select the one you search for"
      >
        <option value="Harry Potter">Harry Potter</option>
        <option value="Hermione Granger">Hermione Granger</option>
      </StyledSelect>
    </StyledLabel>
  );
};

export default Select;
