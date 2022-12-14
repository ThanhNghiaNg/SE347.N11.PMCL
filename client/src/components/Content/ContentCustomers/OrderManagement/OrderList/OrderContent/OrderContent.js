import { NavLink } from "react-router-dom";

import { addDotStyle } from "../../../../../../utils/global";

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
                <NavLink
                  to={`/detail/${product.id}`}
                  className={classes["title"]}
                >
                  {product.title}
                </NavLink>
                <p className={classes["publisher"]}>{product.publisher}</p>
              </div>
            </div>
            <div className={classes["price"]}>
              <span>{addDotStyle(String(product.price * product.amount))}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderContent;
