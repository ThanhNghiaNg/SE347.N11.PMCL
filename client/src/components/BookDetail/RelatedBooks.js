import classes from "./RelatedBook.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BookItem from "../Content/ContentBooks/BookItem";
import { hostURL } from "../../utils/global";

const RelatedBook = (props) => {
  const { category, id } = props;
  console.log(category, id);
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    const fecthBooks = async () => {
      const respone = await fetch(`${hostURL}/`);
      const data = await respone.json();
      // console.log(data)
      setAllBooks(data.data);
    };
    fecthBooks();
  }, []);

  let relatedBook = (
    <p className="text-center fs-4">
      <em>Không tìm thấy sách tương tự</em>
    </p>
  );
  let noRelated = true;
  if (allBooks.length > 0) {
    relatedBook = allBooks
      .filter((_book) => _book.category === category && _book._id !== id)
      .slice(0, 7)
      .map((book) => {
        return <BookItem key={book._id} book={book} />;
      });
    if (relatedBook.length > 0) {
      noRelated = false;
    }
  }
  return (
    <div className={`${noRelated ? "" : classes.related}`}>{relatedBook}</div>
  );
};

export default RelatedBook;
