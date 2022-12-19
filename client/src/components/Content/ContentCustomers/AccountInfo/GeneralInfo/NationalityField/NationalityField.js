import FormControl from "../../../../../UI/UserForm/FormControl";
import InputLabel from "../../../../../UI/UserForm/InputLabel";
import InputContainer from "../../../../../UI/UserForm/InputContainer";
import InputField from "../../../../../UI/UserForm/InputField";

const NationalityField = (props) => {
  return (
    <FormControl>
      <InputLabel>Quốc tịch</InputLabel>
      <InputContainer>
        <InputField
          name="fullName"
          type="text"
          placeholder="Thêm quốc tịch"
          maxLength="128"
        />
      </InputContainer>
    </FormControl>
  );
};

export default NationalityField;
