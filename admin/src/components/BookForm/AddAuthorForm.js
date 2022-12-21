import { useRef } from "react";
import { hostURL } from "../../utils/global";
const AddAuthorForm = (props) => {
  const nameRef = useRef();
  const pseudonymRef = useRef();
  const addAuthorHandler = (event) => {
    event.preventDefault();
    const postAddAuthor = async () => {
      const respone = await fetch(`${hostURL}/admin/add-author`, {
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          name: nameRef.current.value,
          pseudonym: pseudonymRef.current.value,
        }),
      });
      const data = await respone.json();
      props.onAddAuthor(data);
    };
    postAddAuthor();
  };

  return (
    <form>
      <input type="text" placeholder="Tên tác giả" ref={nameRef}></input>
      <input type="text" placeholder="Bút danh" ref={pseudonymRef}></input>
      <button className="btn btn-dark" onClick={addAuthorHandler}>
        Xác nhận
      </button>
    </form>
  );
};

export default AddAuthorForm;
