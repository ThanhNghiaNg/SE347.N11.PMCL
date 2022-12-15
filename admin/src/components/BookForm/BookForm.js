import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { hostURL } from "../../utils/global";
import classes from "./BookForm.module.css";

const BookForm = (props) => {
  const edit = props.edit;
  const params = useParams();
  const id = params.id;
  const [book, setBook] = useState();
  const titleRef = useRef();
  const priceRef = useRef();
  const authorsRef = useRef();
  const categoryRef = useRef();
  const publisherRef = useRef();
  const shortDescriptionRef = useRef();
  const descriptionRef = useRef();
  const imagesRef = useRef();
  const quantitySoldRef = useRef();
  const amountRef = useRef();
  console.log(book);

  useEffect(() => {
    const getBook = async () => {
      const respone = await fetch(`${hostURL}/book/${id}`);
      const data = await respone.json();
      setBook(data);
      console.log(data);
    };
    if (edit) {
      getBook();
    }
  }, []);

  const postBookHandler = (event) => {
    event.preventDefault();
    const postRequest = async () => {
      const respone = await fetch(
        `${hostURL}/admin/${edit ? `update-book/${id}` : "add-book"}`,
        {
          credentials: "include",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: titleRef.current.value,
            price: priceRef.current.value,
            authors: book.authors, // need to fix
            category: categoryRef.current.value,
            publisher: publisherRef.current.value,
            short_description: shortDescriptionRef.current.value,
            description: descriptionRef.current.value,
            images: imagesRef.current.value,
            quantity_sold: quantitySoldRef.current.value,
            amount: amountRef.current.value,
          }),
        }
      );
      const data = await respone.json();
      console.log(data);
    };
    postRequest();
  };

  return (
    <form className={classes.form}>
      {edit && (
        <div className={classes["input-controls"]}>
          <label>Id</label>
          <input defaultValue={book && book._id} disabled={true}></input>
        </div>
      )}

      <div className={classes["input-controls"]}>
        <label>Title</label>
        <input defaultValue={book && book.title} ref={titleRef}></input>
      </div>
      <div className={classes["input-controls"]}>
        <label>Price</label>
        <input defaultValue={book && book.price} ref={priceRef}></input>
      </div>
      <div className={classes["input-controls"]}>
        <label>Authors</label>
        <input
          defaultValue={book ? book.authors.map((a) => a.name).join(", ") : ""}
          ref={authorsRef}
        ></input>
      </div>
      <div className={classes["input-controls"]}>
        <label>Category</label>
        <input
          defaultValue={book ? book.category : ""}
          ref={categoryRef}
        ></input>
      </div>
      <div className={classes["input-controls"]}>
        <label>Publisher</label>
        <input defaultValue={book && book.publisher} ref={publisherRef}></input>
      </div>
      <div className={classes["input-controls"]}>
        <label>Short description</label>
        <textarea
          defaultValue={book && book.short_description}
          ref={shortDescriptionRef}
        ></textarea>
      </div>
      <div className={classes["input-controls"]}>
        <label>Description</label>
        <textarea
          defaultValue={book && book.description}
          ref={descriptionRef}
        ></textarea>
      </div>
      <div className={classes["input-controls"]}>
        <label>Image URLs</label>
        <input
          defaultValue={book && JSON.stringify(book.images)}
          ref={imagesRef}
        ></input>
      </div>
      <div className={classes["input-controls"]}>
        <label>Quantity Sold</label>
        <input
          defaultValue={book && book.quantity_sold}
          ref={quantitySoldRef}
        ></input>
      </div>
      <div className={classes["input-controls"]}>
        <label>Amount</label>
        <input defaultValue={book && book.amount} ref={amountRef}></input>
      </div>
      {edit && (
        <div className={classes["input-controls"]}>
          <label>Rate</label>
          <input defaultValue={book && book.rate} disabled={true}></input>
        </div>
      )}

      <div className={classes["action-controls"]}>
        <button
          className={`btn bg-success text-white`}
          onClick={postBookHandler}
        >
          {edit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default BookForm;
