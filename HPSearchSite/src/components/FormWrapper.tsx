import Logo from "./Logo";
import Title from "./Title";
import SubmitForm from "./SubmitForm";
import Select from "./Select";
import Checkbox from "./Checkbox";

const FormWrapper = () => {
  return (
    <div className="form-wrapper">
      <Logo />
      <Title />
      <Checkbox />
      <Select />
      <SubmitForm />
    </div>
  );
};

export default FormWrapper;

