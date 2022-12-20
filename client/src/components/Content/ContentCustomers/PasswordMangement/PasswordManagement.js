import PasswordChangeForms from "./PasswordChangeForm/PasswordChangeForm";

import classes from "./PasswordManagement.module.css";

const PasswordManagement = (props) => {
  const savePasswords = (passwords) => {
    console.log(passwords);
  };

  return (
    <div className={classes["password-management"]}>
      <div className={classes["password-management__heading"]}>
        Thiết lập mật khẩu
      </div>
      <div className={classes["password-management__container"]}>
        <PasswordChangeForms onSavePasswords={savePasswords} />
      </div>
    </div>
  );
};

export default PasswordManagement;
