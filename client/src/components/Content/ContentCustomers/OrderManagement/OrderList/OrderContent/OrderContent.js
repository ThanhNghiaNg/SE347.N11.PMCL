import { addDotStyle } from "../../../../ContentBooks/BookItem";

import classes from "./OrderContent.module.css";

const OrderContent = (props) => {
  return (
    <div className={classes["order-item__content"]}>
      <div className={classes["product-list"]}>
        {props.products.map((product) => (
          <div key={product.id} className={classes["product"]}>
            <div className={classes["detail"]}>
              <div
                className={classes["product__image"]}
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <span className={classes["quantity"]}>x{product.amount}</span>
              </div>
              <div className={classes["product__info"]}>
                <p className={classes["title"]}>{product.title}</p>
                <p className={classes["publisher"]}>{product.publisher}</p>
              </div>
            </div>
            <div className={classes["price"]}>
              <span>
                {addDotStyle(String(product.price * product.amount))} đ
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderContent;
