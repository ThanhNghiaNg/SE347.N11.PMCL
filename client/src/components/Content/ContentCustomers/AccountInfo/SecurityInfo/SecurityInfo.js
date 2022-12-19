import InputField from "../../../../UI/UserForm/InputField";
import InputLabel from "../../../../UI/UserForm/InputLabel";

import classes from "./SecurityInfo.module.css";

const SecurityInfo = (props) => {
  return (
    <div className={classes["security-info"]}>
      <span className={classes["info-title"]}>Số điện thoại và email</span>
      <div className={classes["list-container"]}>
        <div className={classes["list-item"]}>
          <div className={classes["info"]}>
            <InputLabel>
              <div className={classes["info__label"]}>
                <img
                  className={classes["icon"]}
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/account/phone.png"
                ></img>
                <span>Số điện thoại</span>
              </div>
            </InputLabel>
            <div className={classes["info__input"]}>
              <InputField
                name="phone-number"
                type="tel"
                placeholder="Thêm số điện thoại"
                maxLength="10"
              />
            </div>
          </div>
        </div>
        <div className={classes["list-item"]}>
          <div className={classes["info"]}>
            <InputLabel>
              <div className={classes["info__label"]}>
                <img
                  className={classes["icon"]}
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/account/email.png"
                ></img>
                <span>Email</span>
              </div>
            </InputLabel>
            <div className={classes["info__input"]}>
              <InputField
                name="email"
                type="email"
                placeholder="Thêm email"
                maxLength="128"
              />
            </div>
          </div>
        </div>
      </div>
      <span className={classes["info-title"]}>Địa chỉ</span>
      <div className={classes["list-container"]}>
        <div className={classes["list-item"]}>
          <div className={classes["info"]}>
            <InputLabel>
              <div className={classes["info__label"]}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stokewidth="0"
                  viewBox="0 0 24 24"
                  height="35px"
                  width="35px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    stroke="#9B9B9B"
                    fill="#9B9B9B"
                    strokeWidth="0px"
                  ></path>
                </svg>
                <span>Địa chỉ</span>
              </div>
            </InputLabel>
            <div className={classes["info__input"]}>
              <InputField
                name="address"
                type="text"
                placeholder="Thêm địa chỉ"
                maxLength="128"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityInfo;
