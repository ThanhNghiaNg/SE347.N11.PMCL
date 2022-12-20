import PasswordChangeForms from "./PasswordChangeForm/PasswordChangeForm";

import classes from "./PasswordManagement.module.css";

const PasswordManagement = (props) => {
  const savePasswords = (passwords) => {
    console.log(passwords);

    // const postLogin = async () => {
    //   const respone = await fetch(`${hostURL}/login`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, password }),
    //     credentials: "include",
    //   });
    //   const data = await respone.json();
    //   console.log(data);
    //   if (respone.status === 200) {
    //     props.onCloseModal();
    //     dispatch(authActions.login(data.token));
    //     if (rememberRef.current.checked) {
    //       dispatch(authActions.rememberUser());
    //     }
    //   }
    // };
    // postLogin();
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
