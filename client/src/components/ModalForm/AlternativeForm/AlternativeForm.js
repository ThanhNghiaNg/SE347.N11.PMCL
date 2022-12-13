import classes from "./AlternativeForm.module.css";

const AlternativeForm = () => {
  return (
    <div className="alternative-form">
      <div className="alternative-form__heading">
        <p>Hoặc tiếp tục bằng</p>
      </div>
      <div className="alternative-form__items">
        <ul className="social-items">
          <li className="social-item">
            <img
              src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png"
              alt="facebook"
            />
          </li>
          <li className="social-item">
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
