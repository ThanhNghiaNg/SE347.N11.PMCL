import { hostURL } from "../../../../utils/global";
import { popupActions } from "../../../../store/popup";
import PasswordChangeForms from "./PasswordChangeForm/PasswordChangeForm";

import classes from "./PasswordManagement.module.css";
import { useDispatch } from "react-redux";

const PasswordManagement = (props) => {
  const dispatch = useDispatch();
  const savePasswords = (passwords) => {
    const postChangePassword = async () => {
      try {
        const respone = await fetch(`${hostURL}/user/change-password`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            password: passwords.oldPassword,
            newPassowrd: passwords.newPassword,
          }),
          credentials: "include",
        });
        if (respone.status === 200) {
          dispatch(popupActions.showInform("Đã thay đổi mật khẩu!"));
        } else {
          dispatch(popupActions.showError("Mật khẩu không đúng!"));
        }
      } catch (err) {
        console.log(err);
      }
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
