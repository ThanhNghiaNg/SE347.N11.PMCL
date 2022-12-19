import NameField from "./NameField/NameField";
import NationalityField from "./NationalityField/NationalityField";
import BirthdayField from "./BirthdayField/BirthdayField";
import GenderField from "./GenderField/GenderField";

import classes from "./GeneralInfo.module.css";

const GeneralInfo = (props) => {
  return (
    <div className={classes["info__general-info"]}>
      <div className={classes["general-info__title"]}>Thông tin cá nhân</div>
      <div className={classes["general-info__form"]}>
        <NameField />
        <BirthdayField />
        <GenderField />
        <NationalityField />
      </div>
    </div>
  );
};

export default GeneralInfo;
