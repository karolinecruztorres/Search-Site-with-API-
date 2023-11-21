import Logo from "./Logo";
import Title from "./Title";
import SubmitForm from "./SubmitForm";
import Select from "./Select";
import Radio from "./Radio";

const FormWrapper = () => {
  return (
    <form className="form-wrapper">
      <Logo />
      <Title />
      <Radio />
      <Select />
      <SubmitForm />
    </form>
  );
};

export default FormWrapper;

