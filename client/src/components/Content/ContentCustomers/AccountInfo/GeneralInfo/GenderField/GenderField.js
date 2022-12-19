import { useState } from "react";
import FormControl from "../../../../../UI/UserForm/FormControl";
import InputLabel from "../../../../../UI/UserForm/InputLabel";

import classes from "./GenderField.module.css";

const genderOptions = [
  {
    value: "male",
    text: "Nam",
  },
  {
    value: "female",
    text: "Nữ",
  },
  {
    value: "other",
    text: "Khác",
  },
];

const GenderField = (props) => {
  const [genderChecked, setGenderChecked] = useState("male");

  return (
    <FormControl>
      <InputLabel>Giới tính</InputLabel>
      {genderOptions.map((gender, index) => (
        <label
          key={index}
          className={classes["radio-button"]}
          onClick={() => setGenderChecked(gender.value)}
        >
          <input
            type="radio"
            name="gender"
            value={gender.value}
            checked={genderChecked === gender.value}
          />
          <span
            className={`${classes["radio-fake"]} ${
              genderChecked === gender.value ? classes["checked"] : ""
            }`}
          ></span>
          <span className={classes["radio-button__label"]}>{gender.text}</span>
        </label>
      ))}
    </FormControl>
  );
};

export default GenderField;
