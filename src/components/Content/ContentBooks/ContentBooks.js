import { useSelector } from "react-redux";
import classes from "./ContentBooks.module.css";
import BookItem from "./BookItem";

const ContentBooks = (props) => {
  const currentProducts = useSelector(
    (state) => state.products.currentProducts
  );
  
  const searchNotFound = useSelector((state) => state.errors.searchNotFound);
  let contentBooks = <div>Loading...</div>;
  if (currentProducts.length > 0) {
    contentBooks = currentProducts.map((book, i) => {
      return <BookItem key={book.id + i} book={book} />
    });
  } else if (searchNotFound) {
    contentBooks = <p>We could not find your book</p>;
  }
  return <div className={classes.content}>{contentBooks}</div>;
};

export default ContentBooks;
