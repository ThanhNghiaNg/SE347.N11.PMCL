import classes from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <div>
      <div className={classes["login-form__heading"]}>
        <h4>Đăng nhập bằng email</h4>
        <p>Nhập email và mật khẩu tài khoản tiki</p>
      </div>
      <form className={classes["login-form"]}>
        <div className={classes["login-form__email"]}>
          <input type="email" name="email" placeholder="Email đăng nhập" />
        </div>
        <div className={classes["login-form__password"]}>
          <input type="password" name="login-password" placeholder="Mật khẩu" />
        </div>
        <div className={classes["login-form__actions"]}>
          <button>ĐĂNG NHẬP</button>
        </div>
      </form>

      <div className={classes["login-form__reset"]}>
        <p>Quên mật khẩu</p>
      </div>
    </div>
  );
};

export default LoginForm;
