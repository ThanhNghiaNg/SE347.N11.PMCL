import FormControl from "../../../../../UI/UserForm/FormControl";
import InputLabel from "../../../../../UI/UserForm/InputLabel";
import InputContainer from "../../../../../UI/UserForm/InputContainer";

import classes from "./BirthdayField.module.css";

const dayOptions = [];
for (let i = 1; i <= 31; i++) {
  dayOptions.push(i);
}
const monthOptions = [];
for (let i = 1; i <= 12; i++) {
  monthOptions.push(i);
}
const date = new Date();
const yearOptions = [];
for (let i = date.getFullYear(); i >= 1900; i--) {
  yearOptions.push(i);
}

const BirthdayField = (props) => {
  return (
    <FormControl>
      <InputLabel>Ngày sinh</InputLabel>
      <InputContainer className="input-birthday">
        <select name="day">
          <option value="0">Ngày</option>
          {dayOptions.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select name="month">
          <option value="0">Tháng</option>
          {monthOptions.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select name="year">
          <option value="0">Năm</option>
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </InputContainer>
    </FormControl>
  );
};

export default BirthdayField;
