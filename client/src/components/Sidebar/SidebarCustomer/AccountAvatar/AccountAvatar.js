import { useEffect, useState } from "react";
import { hostURL } from "../../../../utils/global";
import classes from "./AccountAvatar.module.css";

const AccountAvatar = (props) => {
  const [name, setName] = useState("");
  useEffect(() => {
    const getUser = async () => {
      const respone = await fetch(`${hostURL}/user/update`, {
        credentials: "include",
      });
      const data = await respone.json();
      setName(data.name)
    };
    getUser();
  }, []);
  return (
    <div className={classes["account"]}>
      <img
        className={classes["account__avatar"]}
        src="https://salt.tikicdn.com/desktop/img/avatar.png"
        alt="avatar"
      />
      <div className={classes["account__info"]}>
        Tài khoản của <strong>{name}</strong>
      </div>
    </div>
  );
};

export default AccountAvatar;
