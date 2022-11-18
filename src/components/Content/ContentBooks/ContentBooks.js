import { useSelector } from "react-redux";
import classes from "./ContentBooks.module.css";
import BookItem from "./BookItem";

const ContentBooks = (props) => {
  const allProducts = useSelector((state) => state.products.allProducts);
  let contentBooks = <div>Is Loading</div>;
  if (allProducts.length > 0) {
    contentBooks = allProducts.map((book, i) => {
      return <BookItem key={book.id + i} book={book} />;
    });
  }
  return <div className={classes.content}>{contentBooks}</div>;
};

export default ContentBooks;
