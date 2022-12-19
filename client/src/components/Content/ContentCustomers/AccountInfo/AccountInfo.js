import GeneralInfo from "./GeneralInfo/GeneralInfo";
import SecurityInfo from "./SecurityInfo/SecurityInfo";
import SubmitButton from "./SubmitButton/SubmitButton";

import classes from "./AccountInfo.module.css";

const AccountInfo = (props) => {
  const submitHandler = () => {};

  return (
    <div className={classes["account-info"]}>
      <div className={classes["account-info__heading"]}>
        Thông tin tài khoản
      </div>
      <div className={classes["account-info__container"]}>
        <form onSubmit={submitHandler}>
          <div className={classes["form-info"]}>
            <GeneralInfo />
            <div className={classes["info__vertical"]}></div>
            <SecurityInfo />
          </div>
          <div style={{ width: "176px" }}>
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountInfo;
