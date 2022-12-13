import classes from "./AlternativeForm.module.css";

const AlternativeForm = () => {
  return (
    <div className={classes["alternative-form"]}>
      <div className={classes["alternative-form__heading"]}>
        <p>Hoặc tiếp tục bằng</p>
      </div>
      <div className={classes["alternative-form__items"]}>
        <ul className={classes["social-items"]}>
          <li className={classes["social-item"]}>
            <img
              src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png"
              alt="facebook"
            />
          </li>
          <li className={classes["social-item"]}>
            <img
              src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png"
              alt="gmail"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AlternativeForm;
