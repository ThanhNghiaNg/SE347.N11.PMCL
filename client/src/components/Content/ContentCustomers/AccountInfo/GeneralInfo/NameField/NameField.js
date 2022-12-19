import FormControl from "../../../../../UI/UserForm/FormControl";
import InputLabel from "../../../../../UI/UserForm/InputLabel";
import InputContainer from "../../../../../UI/UserForm/InputContainer";
import InputField from "../../../../../UI/UserForm/InputField";

import classes from "./NameField.module.css";

const NameField = (props) => {
  return (
    <FormControl>
      <InputLabel>Họ & tên</InputLabel>
      <InputContainer>
        <InputField
          name="fullName"
          type="text"
          placeholder="Thêm họ tên"
          maxLength="128"
        />
      </InputContainer>
    </FormControl>
  );
};

export default NameField;
