import classes from "./QuantityInput.module.css";
import { useEffect, useState } from "react";

const QuantityInput = (props) => {
  const getQuantity = props.getQuantity;
  const [quantity, setQuantity] = useState(props.default ? props.default : 1);
  useEffect(() => {
    setQuantity(props.default);
  }, [props.default]);
  const enteredQuantityHandler = (event) => {
    const quantity = event.target.value;
    setQuantity((prev) => {
      getQuantity && getQuantity(quantity);
      return quantity;
    });
  };

  const increaseQuantityHandler = (event) => {
    event.preventDefault();
    setQuantity((prev) => {
      const quantity = Number(prev) + 1;
      getQuantity && getQuantity(quantity);
      return quantity;
    });
  };

  const decreaseQuantityHandler = (event) => {
    event.preventDefault();
    Number(quantity) - 1 > 0 &&
      setQuantity((prev) => {
        const quantity = Number(prev) - 1;
        getQuantity && getQuantity(quantity);
        return quantity;
      });
  };

  return (
    <div className={`${classes.group} mt-4 mb-4`}>
      <button onClick={decreaseQuantityHandler} className={`btn bg-light`}>
        -
      </button>
      <input min={1} value={quantity} onChange={enteredQuantityHandler}></input>
      <button onClick={increaseQuantityHandler} className={`btn bg-light`}>
        +
      </button>
    </div>
  );
};

export default QuantityInput;
