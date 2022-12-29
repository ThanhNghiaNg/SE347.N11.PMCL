
import { Link } from "react-router-dom";
import { hostURL } from "../../utils/global";
import { useContext } from "react";
import classes from "./BookItem.module.css";
import modalContext from "../../store/modalContext";
export const addDotStyle = (str) => {
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
const BookItem = (props) => {
  const { book: bookInfo } = props;
  const modalCtx = useContext(modalContext);

  const deleteBookHandler = (event) => {
    event.preventDefault();
    const postDeleteBook = async () => {
      const respone = await fetch(`${hostURL}/admin/delete-book`, {
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ id: bookInfo._id }),
      });
      if (respone.status === 200) {
        props.onRefresh((prevState) => !prevState);
      }
    };
    modalCtx.showConfirm("Bạn có muốn xoá sách này?", postDeleteBook);
  };

  return (
    <div className={classes.book}>
      <img src={bookInfo.images[0].url} alt={bookInfo.title}></img>
      <div className={classes.name}>{bookInfo.title}</div>
      {bookInfo.rate > 0 ? (
        <p className={classes.rate}>
          <p>{bookInfo.rate}</p>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
        </p>
      ) : (
        <p className={classes.rate}></p>
      )}
      <p className={classes.price}>{addDotStyle(String(bookInfo.price))} VNĐ</p>
      <div className={classes["action-control"]}>
        <Link
          to={`/edit/${bookInfo._id}`}
          className="btn bg-success text-white fs-6"
        >
          Chỉnh sửa
        </Link>
        <button
          className="btn bg-danger text-white ms-1"
          onClick={deleteBookHandler}
        >
          Xoá
        </button>
      </div>
    </div>
  );
};

export default BookItem;
