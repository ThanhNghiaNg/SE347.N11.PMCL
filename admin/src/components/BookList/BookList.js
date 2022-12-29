import classes from "./BookList.module.css";
import BookItem from "./BookItem";
import { useEffect, useState } from "react";
import { hostURL } from "../../utils/global";

const BookList = (props) => {
  const [products, setProducts] = useState([]);
  const [toggleRefresh, setToggleRefresh] = useState(false)

  useEffect(() => {
    document.title = "Admin Home"
    const getAllBooks = async () => {
      const respone = await fetch(`${hostURL}/`, {
        credentials: "include",
      });
      const data = await respone.json();
      setProducts(data.data);
      console.log(data);
    };
    getAllBooks();
  }, [toggleRefresh]);

  let contentBooks = <div>Loading...</div>;
  if (products.length > 0) {
    contentBooks = products.map((book) => {
      return <BookItem key={book._id} book={book} onRefresh={setToggleRefresh}/>;
    });
  }

  return <div className={classes.content}>{contentBooks}</div>;
};

export default BookList;
