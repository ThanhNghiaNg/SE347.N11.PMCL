import { useSelector } from "react-redux";
import classes from "./ContentBooks.module.css";
import BookItem from "./BookItem";
import Spinner from "../../Spinner/Spinner";
import { useEffect } from "react";

const ContentBooks = (props) => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  console.log('content book running')
  const currentProducts = useSelector(
    (state) => state.products.currentProducts
  );
  window.scroll(0,0)
  const searchNotFound = useSelector((state) => state.errors.searchNotFound);
  let contentBooks = <Spinner />;
  if (currentProducts.length > 0) {
    contentBooks = currentProducts.map((book) => {
      return <BookItem key={book._id} book={book} />;
    });
  } else if (searchNotFound) {
    contentBooks = <p>We could not find your book</p>;
  }
  return <div className={classes.content}>{contentBooks}</div>;
};

export default ContentBooks;
