import classes from "./BookItem.module.css";
export const addDotStyle = (str) => {
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
const BookItem = (props) => {
  const { book: bookInfo } = props;
  // console.log(bookInfo);
  return (
    <div className={classes.book}>
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
