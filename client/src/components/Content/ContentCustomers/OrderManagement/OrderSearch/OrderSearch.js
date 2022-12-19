import { useEffect, useState } from "react";
import classes from "./OrderSearch.module.css";

const OrderSearch = (props) => {
  const [enteredSearch, setEnteredSearch] = useState("");
  const [clicked, setClicked] = useState(false);

  const searchHandler = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    if (clicked === true) {
      props.onSetSearchValue(enteredSearch);
    } else {
      setEnteredSearch("");
      props.onSetSearchValue("");
    }
  }, [clicked]);

  return (
    <div className={classes["order-search"]}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        stokewidth="0"
        viewBox="0 0 24 24"
        color="#808089"
        height="16px"
        width="16px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
      </svg>
      <input
        name="search"
        placeholder="Tìm đơn hàng theo Mã đơn hàng hoặc Tên sản phẩm"
        type="search"
        className={classes["input-field"]}
        value={enteredSearch}
        onChange={(e) => setEnteredSearch(e.target.value)}
      />
      <div onClick={searchHandler} className={classes["actions"]}>
        {clicked === false ? "Tìm đơn hàng" : "Hủy tìm kiếm"}
      </div>
    </div>
  );
};

export default OrderSearch;
