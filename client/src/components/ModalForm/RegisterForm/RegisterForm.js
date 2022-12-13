import classes from "./RegisterForm.module.css";

const RegisterForm = () => {
  return (
    <div>
      <div className={classes["regis-form__heading"]}>
        <h4>Tạo tài khoản</h4>
        <p>Vui lòng nhập email và mật khẩu</p>
      </div>
      <form className={classes["regis-form"]}>
        <div className={classes["regis-form__email"]}>
          <input type="email" name="email" placeholder="Email đăng ký" />
        </div>
        <div className={classes["regis-form__password"]}>
          <input type="password" name="regis-password" placeholder="Mật khẩu" />
        </div>
        <div className={classes["regis-form__actions"]}>
          <button>TẠO TÀI KHOẢN</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
