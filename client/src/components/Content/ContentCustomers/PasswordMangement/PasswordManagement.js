import { hostURL } from "../../../../utils/global";

import PasswordChangeForms from "./PasswordChangeForm/PasswordChangeForm";

import classes from "./PasswordManagement.module.css";

const PasswordManagement = (props) => {
  const savePasswords = (passwords) => {
    const postChangePassword = async () => {
      const respone = await fetch(`${hostURL}/user/change-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: passwords.oldPassword,
          newPassowrd: passwords.newPassword,
        }),
        credentials: "include",
      });
      const data = await respone.json();
      console.log(data);
    };
    postChangePassword();
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
