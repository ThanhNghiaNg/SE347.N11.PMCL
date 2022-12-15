import { useEffect, useRef, useState } from "react";
import { hostURL } from "../../utils/global";

const BookDetail = (props) => {
  const id = props.id;
  const [book, setBook] = useState({});
  const quantityRef = useRef();
  useEffect(() => {
    const getBook = async () => {
      const respone = await fetch(`${hostURL}/book/${id}`, {
        credentials: "include",
      });
      const data = await respone.json();
      setBook(data);
    };
    getBook();
  }, []);

  const addBookToCartHandler = (event) => {
    event.preventDefault();
    const postAddBook = async () => {
      const respone = await fetch(`${hostURL}/add-to-cart`, {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookId: id,
          quantity: quantityRef.current.value,
        }),
      });
      const data = await respone.json();
      console.log(data);
    };
    postAddBook();
  };
  return (
    <div>
      <h1>{book.title}</h1>
      <input type={"number"} ref={quantityRef} min={1} defaultValue={1}></input>
      <button onClick={addBookToCartHandler}>Add to Cart</button>
    </div>
  );
};

export default BookDetail;
