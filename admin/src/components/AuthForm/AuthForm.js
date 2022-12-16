import classes from "./AuthForm.module.css";

const AuthForm = (props) => {
  const isLogin = props.isLogin;
  return (
    <form className={classes.form}>
      <input type="text" placeholder="Username"></input>
      <input type="password" placeholder="Password"></input>
      {!isLogin && <input type="text" placeholder="Secret Key"></input>}
      <button className={`btn bg-success text-white`}>{isLogin ? "Login" : "Register"}</button>
    </form>
  );
};

export default AuthForm;
