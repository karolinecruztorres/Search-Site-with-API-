import styled from "styled-components";

const StyledSubmit = styled.input`
  font-family: "Bigelow Rules", serif;
  font-size: 28px;
  border: none;
  padding: 3px 230px;
  background-color: rgba(183, 156, 109, 0.5);
  cursor: pointer;
  transition: opacity 0.15s, font-weight 0.15s;

  &:hover {
    opacity: 0.8;
    font-weight: bold;
  }
`;

const SubmitForm = () => {
  return <StyledSubmit type="submit" value="Accio!" name="button" />;
};

export default SubmitForm;
