import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { hostURL } from "../../utils/global";
import classes from "./BookForm.module.css";
import AddAuthorForm from "./AddAuthorForm";

const BookForm = (props) => {
  const edit = props.edit;
  const params = useParams();
  const id = params.id;
  const [book, setBook] = useState();
  const [authors, setAuthors] = useState([]);
  const [images, setImages] = useState([]);
  const [isAddingAuthor, setIsAddingAuthor] = useState(false);
  const [isAddingImage, setIsAddingImage] = useState(false);

  const titleRef = useRef();
  const priceRef = useRef();
  const inputImageRef = useRef();
  const categoryRef = useRef();
  const publisherRef = useRef();
  const shortDescriptionRef = useRef();
  const descriptionRef = useRef();
  const imagesRef = useRef();
  const quantitySoldRef = useRef();
  const amountRef = useRef();
  console.log(book);
  console.log(authors);

  useEffect(() => {
    const getBook = async () => {
      const respone = await fetch(`${hostURL}/book/${id}`);
      const data = await respone.json();
      setBook(data);
      setAuthors(data.authors);
      setImages(data.images);
      console.log(data);
    };
    if (edit) {
      getBook();
    }
  }, [edit]);

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
            authors: authors,
            category: categoryRef.current.value,
            publisher: publisherRef.current.value,
            short_description: shortDescriptionRef.current.value,
            description: descriptionRef.current.value,
            images: images,
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

  const addAuthors = (author) => {
    setAuthors((authors) => [...authors, author]);
    setIsAddingAuthor(false);
  };

  const addImageHandler = (event) => {
    event.preventDefault();
    if (isAddingImage && inputImageRef.current.value) {
      setImages((prev) => [...prev, { url: inputImageRef.current.value }]);
    } else if (isAddingImage && !inputImageRef.current.value) {
      alert("URL trống!");
    }
    setIsAddingImage((prev) => !prev);
  };

  return (
    <form className={classes.form}>
      {edit && (
        <div className={classes["input-controls"]}>
          <label>Id</label>
          <input
            className="form-control"
            defaultValue={book && book._id}
            disabled={true}
          ></input>
        </div>
      )}

      <div className={classes["input-controls"]}>
        <label>Title</label>
        <input
          className="form-control"
          defaultValue={book && book.title}
          ref={titleRef}
        ></input>
      </div>
      <div className={classes["input-controls"]}>
        <label>Price</label>
        <input
          className="form-control"
          defaultValue={book && book.price}
          ref={priceRef}
        ></input>
      </div>
      <div className={classes["input-controls"]}>
        <label>Authors</label>
        <div>
          {isAddingAuthor && <AddAuthorForm onAddAuthor={addAuthors} />}
          {!isAddingAuthor && (
            <>
              {authors.length > 0 && (
                <input
                  value={authors.map((author) => author.name).join(", ")}
                  className="form-control"
                ></input>
              )}
              <button
                className="btn btn-dark"
                onClick={() => {
                  setIsAddingAuthor(true);
                }}
              >
                Thêm tác giả
              </button>
            </>
          )}
        </div>
      </div>
      <div className={classes["input-controls"]}>
        <label>Category</label>
        <input
          className="form-control"
          defaultValue={book ? book.category : ""}
          ref={categoryRef}
        ></input>
      </div>
      <div className={classes["input-controls"]}>
        <label>Publisher</label>
        <input
          className="form-control"
          defaultValue={book && book.publisher}
          ref={publisherRef}
        ></input>
      </div>
      <div className={classes["input-controls"]}>
        <label>Short description</label>
        <textarea
          defaultValue={book && book.short_description}
          ref={shortDescriptionRef}
          className="form-control"
        ></textarea>
      </div>
      <div className={classes["input-controls"]}>
        <label>Description</label>
        <textarea
          className="form-control"
          defaultValue={book && book.description}
          ref={descriptionRef}
        ></textarea>
      </div>

      <div className={classes["input-controls"]}>
        <label>Image URLs</label>
        <div>
          {images.map((image) => (
            <input
              value={image.url}
              className="form-control"
              disabled="true"
            ></input>
          ))}
          {isAddingImage && (
            <input
              type="text"
              placeholder="Thêm URL hình ảnh"
              className="form-control"
              require="true"
              ref={inputImageRef}
            ></input>
          )}
          <button className="btn btn-dark" onClick={addImageHandler}>
            {isAddingImage ? "Xác nhận" : "Thêm hình ảnh"}
          </button>
        </div>
      </div>
      <div className={classes["input-controls"]}>
        <label>Quantity Sold</label>
        <input
          className="form-control"
          defaultValue={book && book.quantity_sold}
          ref={quantitySoldRef}
        ></input>
      </div>
      <div className={classes["input-controls"]}>
        <label>Amount</label>
        <input
          className="form-control"
          defaultValue={book && book.amount}
          ref={amountRef}
        ></input>
      </div>
      {edit && (
        <div className={classes["input-controls"]}>
          <label>Rate</label>
          <input
            className="form-control"
            defaultValue={book && book.rate}
            disabled={true}
          ></input>
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
