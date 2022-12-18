import { useNavigate } from "react-router";
import classes from "./BookItem.module.css";
import { addDotStyle } from "../../../utils/global";
const BookItem = (props) => {
  const navigate = useNavigate();
  const { book: bookInfo } = props;

  // console.log(bookInfo);
  const goToDetailHandler = (event) => {
    event.preventDefault();
    return navigate(`/detail/${bookInfo._id}`);
  };

  return (
    <div className={classes.book} onClick={goToDetailHandler}>
      <img src={bookInfo.images[0].url}></img>
      <div className={classes.name}>{bookInfo.title}</div>
      {bookInfo.rate > 0 ? (
        <p className={classes.rate}>
          <p>{bookInfo.rate}</p>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
        </p>
      ) : (
        <p></p>
      )}
      <p className={classes.price}>{addDotStyle(String(bookInfo.price))} VNĐ</p>
    </div>
  );
};

export default BookItem;
