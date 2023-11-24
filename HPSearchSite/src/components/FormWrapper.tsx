import Logo from "./Logo";
import Title from "./Title";
import SubmitForm from "./SubmitForm";
import Select from "./Select";
import Radio from "./Radio";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormWrapper = () => {
  return (
    <StyledForm>
      <Logo />
      <Title />
      <Radio />
      <Select />
      <SubmitForm />
    </StyledForm>
  );
};

export default FormWrapper;
