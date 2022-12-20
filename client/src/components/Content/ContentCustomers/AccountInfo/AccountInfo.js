import { useState } from "react";

import SubmitButton from "../SubmitButton/SubmitButton";

import classes from "./AccountInfo.module.css";

const dayOptions = [];
for (let i = 1; i <= 31; i++) {
  dayOptions.push(i);
}
const monthOptions = [];
for (let i = 1; i <= 12; i++) {
  monthOptions.push(i);
}
const date = new Date();
const yearOptions = [];
for (let i = date.getFullYear(); i >= 1900; i--) {
  yearOptions.push(i);
}

const genderOptions = [
  {
    value: "nam",
    text: "Nam",
  },
  {
    value: "nữ",
    text: "Nữ",
  },
  {
    value: "khác",
    text: "Khác",
  },
];

const AccountInfo = (props) => {
  const [fullName, setFullName] = useState("");
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [genderChecked, setGenderChecked] = useState("nam");
  const [nationality, setNationality] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const userInfo = {
      fullName,
      birthday: { day, month, year },
      gender: genderChecked,
      nationality,
      phoneNumber,
      email,
      address,
    };

    console.log(userInfo);
  };

  return (
    <div className={classes["account-info"]}>
      <div className={classes["account-info__heading"]}>
        Thông tin tài khoản
      </div>
      <div className={classes["account-info__container"]}>
        <form onSubmit={submitHandler}>
          <div className={classes["form-info"]}>
            <div className={classes["info__general-info"]}>
              <div className={classes["general-info__title"]}>
                Thông tin cá nhân
              </div>
              <div className={classes["general-info__form"]}>
                <div className={classes["form__control"]}>
                  <label className={classes["input-label"]}>Họ & tên</label>
                  <div className={classes["input-container"]}>
                    <input
                      onChange={(e) => setFullName(e.target.value)}
                      value={fullName}
                      className={classes["input-field"]}
                      name="fullName"
                      type="text"
                      placeholder="Thêm họ tên"
                      maxLength="128"
                    />
                  </div>
                </div>

                <div className={classes["form__control"]}>
                  <label className={classes["input-label"]}>Ngày sinh</label>
                  <div
                    className={`${classes["input-container"]} ${classes["input-birthday"]}`}
                  >
                    <select
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                      name="day"
                    >
                      <option value="0">Ngày</option>
                      {dayOptions.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                    <select
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                      name="month"
                    >
                      <option value="0">Tháng</option>
                      {monthOptions.map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                    <select
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      name="year"
                    >
                      <option value="0">Năm</option>
                      {yearOptions.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={classes["form__control"]}>
                  <label className={classes["input-label"]}>Giới tính</label>
                  {genderOptions.map((gender, index) => (
                    <label
                      key={index}
                      className={classes["radio-button"]}
                      onClick={() => setGenderChecked(gender.value)}
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={genderChecked}
                        checked={genderChecked === gender.value}
                      />
                      <span
                        className={`${classes["radio-fake"]} ${
                          genderChecked === gender.value
                            ? classes["checked"]
                            : ""
                        }`}
                      ></span>
                      <span className={classes["radio-button__label"]}>
                        {gender.text}
                      </span>
                    </label>
                  ))}
                </div>

                <div className={classes["form__control"]}>
                  <label className={classes["input-label"]}>Quốc tịch</label>
                  <div className={classes["input-container"]}>
                    <input
                      onChange={(e) => setNationality(e.target.value)}
                      value={nationality}
                      className={classes["input-field"]}
                      name="nationality"
                      type="text"
                      placeholder="Thêm quốc tịch"
                      maxLength="128"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={classes["info__vertical"]}></div>

            <div className={classes["security-info"]}>
              <span className={classes["info-title"]}>
                Số điện thoại và email
              </span>
              <div className={classes["list-container"]}>
                <div className={classes["list-item"]}>
                  <div className={classes["info"]}>
                    <label className={classes["input-label"]}>
                      <div className={classes["info__label"]}>
                        <img
                          className={classes["icon"]}
                          src="https://frontend.tikicdn.com/_desktop-next/static/img/account/phone.png"
                        ></img>
                        <span>Số điện thoại</span>
                      </div>
                    </label>
                    <div className={classes["info__input"]}>
                      <input
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className={classes["input-field"]}
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
                    <label className={classes["input-label"]}>
                      <div className={classes["info__label"]}>
                        <img
                          className={classes["icon"]}
                          src="https://frontend.tikicdn.com/_desktop-next/static/img/account/email.png"
                        ></img>
                        <span>Email</span>
                      </div>
                    </label>
                    <div className={classes["info__input"]}>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        className={classes["input-field"]}
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
                    <label className={classes["input-label"]}>
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
                    </label>
                    <div className={classes["info__input"]}>
                      <input
                        onChange={(e) => setAddress(e.target.value)}
                        className={classes["input-field"]}
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
          </div>
          <div style={{ width: "176px" }}>
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountInfo;
