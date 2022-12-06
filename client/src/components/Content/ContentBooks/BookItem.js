import classes from "./BookItem.module.css";
export const addDotStyle = (str)=>{
  return str.replace(/\B(?=(\d{3})+(?!\d))/g,".")
}
const BookItem = (props) => {
  const { book: bookInfo } = props;
  console.log(bookInfo);
  return (
    <div className={classes.book}>
      <img src={bookInfo.thumbnail_url}></img>
      <div className={classes.name}>{bookInfo.name}</div>
      <p className={classes.rate}>
        <p>{bookInfo.rating_average}</p>
        <span>
          <i className="fa-solid fa-star"></i>
        </span>
      </p>
      <p className={classes.price}>{addDotStyle(String(bookInfo.original_price))} VNĐ</p>
    </div>
  );
};

export default BookItem;
