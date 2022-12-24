import classes from "./Footer.module.css";
import Container from "../UI/Container";
const Footer = (props) => {
  const clickGithubHandler = (event) => {
    event.preventDefault();
    window.open("https://github.com/thanhnhan311201");
    window.open("https://github.com/ThanhNghiaNg");
  };
  return (
    <Container className={classes.footer}>
      <ul className="d-flex justify-content-center w-100">
        <li>
          <a onClick={clickGithubHandler}>
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li></li>
      </ul>
    </Container>
  );
};

export default Footer;
