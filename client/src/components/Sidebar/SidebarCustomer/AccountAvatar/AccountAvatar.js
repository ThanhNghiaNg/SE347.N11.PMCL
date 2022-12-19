import classes from "./AccountAvatar.module.css";

const AccountAvatar = (props) => {
  return (
    <div className={classes["account"]}>
      <img
        className={classes["account__avatar"]}
        src="https://graph.facebook.com/v3.3/2694613500774296/picture?type=large&return_ssl_resources=1"
        alt="avatar"
      />
      <div className={classes["account__info"]}>
        Tài khoản của <strong>Nhân Phan</strong>
      </div>
    </div>
  );
};

export default AccountAvatar;
