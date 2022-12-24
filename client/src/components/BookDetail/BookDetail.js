import { useEffect, useState } from "react";
import { hostURL } from "../../utils/global";
import { addDotStyle } from "../../utils/global";

import Container from "../UI/Container";
import QuantityInput from "./QuantityInput";
import ImageList from "./ImageList";
import RelatedBook from "./RelatedBooks";
import classes from "./BookDetail.module.css";
import Card from "../UI/Card";
import BookReviews from "./BookReviews";
import { useDispatch } from "react-redux";
import { productActions } from "../../store/products";

const BookDetail = (props) => {
  window.scroll(0, 0);
  const dispatch = useDispatch();
  const id = props.id;
  const [toggleDescription, setToggleDescription] = useState(false);
  const [book, setBook] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getBook = async () => {
      const respone = await fetch(`${hostURL}/book/${id}`, {
        credentials: "include",
      });
      const data = await respone.json();
      setBook(data);
    };
    getBook();
  }, [id]);

  const addBookToCartHandler = (event) => {
    event.preventDefault();
    const postAddBook = async () => {
      const respone = await fetch(`${hostURL}/add-to-cart`, {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookId: id,
          quantity: quantity,
        }),
      });
      const data = await respone.json();
      dispatch(
        productActions.setQuantityProductCart(
          data.cart.items.reduce((acc, item) => item.quantity + acc)
        )
      );
    };
    postAddBook();
  };

  const getQuantity = (quantity) => {
    setQuantity(quantity);
  };
  const authors =
    book.authors && book.authors.map((author) => author.name).join(",");

  const toggleDescriptionHandler = (event) => {
    setToggleDescription((prev) => !prev);
  };

  return (
    <Container>
      <Card className={classes.wrap}>
        {book.images && <ImageList images={book.images} id={book._id} />}
        <div className={classes.content}>
          <div>
            <p>Tác giả: {authors}</p>
            <h2 className={classes.title}>{book.title}</h2>
            <p className={classes.short_description}>
              {book.short_description}
            </p>
          </div>
          <div>
            <h1 className={classes.price}>{addDotStyle(String(book.price))}</h1>
            <QuantityInput getQuantity={getQuantity} />
            <button
              onClick={addBookToCartHandler}
              className={`btn bg-danger text-white fw-bold fs-5`}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </Card>
      <Card className={classes.description}>
        <div className={classes["stick-description"]}>
          <h2>Mô tả</h2>
          <em onClick={toggleDescriptionHandler}>
            {!toggleDescription ? "Hiện mô tả" : "Thu gọn"}{" "}
          </em>
        </div>

        {toggleDescription && (
          <div dangerouslySetInnerHTML={{ __html: book.description }}></div>
        )}
      </Card>
      {book.category && (
        <Card className={classes.related}>
          <h2>Sách tương tự</h2>
          <RelatedBook category={book.category} id={book._id} />
        </Card>
      )}
      {<BookReviews />}
    </Container>
  );
};

export default BookDetail;
