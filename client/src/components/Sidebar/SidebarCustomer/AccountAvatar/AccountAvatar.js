import classes from "./AccountAvatar.module.css";

const AccountAvatar = (props) => {
  return (
    <div className={classes["account"]}>
      <img
        className={classes["account__avatar"]}
        src="https://salt.tikicdn.com/desktop/img/avatar.png"
        alt="avatar"
      />
      <div className={classes["account__info"]}>
        Tài khoản của <strong>Nhân Phan</strong>
      </div>
    </div>
  );
};

export default AccountAvatar;
