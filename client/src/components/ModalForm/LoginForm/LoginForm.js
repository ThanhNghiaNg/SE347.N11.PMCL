import classes from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <form className="login-form">
      <div className="login-form__email">
        <input type="email" name="email" placeholder="Email đăng nhập" />
      </div>
      <div className="login-form__password">
        <input type="password" name="login-password" placeholder="Mật khẩu" />
      </div>
      <div className="login-form__actions">
        <button>ĐĂNG NHẬP</button>
      </div>
    </form>
  );
};

export default LoginForm;
