import LoginForm from "./LoginForm/LoginForm";
import AlternativeForm from "./AlternativeForm/AlternativeForm";

import classes from "./ModalForm.module.css";

const ModalForm = () => {
  return (
    <div className="modal-form">
      <button className="modal-form__btn-close"></button>
      <div className="modal-form__left">
        <div className="modal-form__inner">
          <div className="modal-form__heading">
            <h4>Xin chào,</h4>
            <p>Đăng nhập hoặc Tạo tài khoản</p>
          </div>

          <LoginForm />

          <div className="modal-form__reset">
            <p>Quên mật khẩu</p>
          </div>

          <AlternativeForm />

          <div className="modal-form__regis">
            <p>
              Bạn lần đầu biết đến Owwi? <span>Đăng ký</span>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-form__right">
        <img
          src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
          width="203"
        />

        <div className="content">
          <h4>Mua sắm tại Owwi</h4>
          <p>Siêu ưu đãi mỗi ngày</p>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
