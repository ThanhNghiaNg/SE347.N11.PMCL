import { useState } from "react";
import Filter from "../../../../UI/Filter";
import classes from "./PriceFilter.module.css";

const addDotStyle = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
const removeDotStyle = (value) => {
  return value.toString().replace(".", "");
};

const PriceFilter = (props) => {
  const [price, setPrice] = useState({ minPrice: 0, maxPrice: 0 });

  const setMinPriceHandler = (e) => {
    setPrice((prev) => ({
      ...prev,
      minPrice: Number(removeDotStyle(e.target.value)),
    }));
  };

  const setMaxPriceHandler = (e) => {
    setPrice((prev) => ({
      ...prev,
      maxPrice: Number(removeDotStyle(e.target.value)),
    }));
  };

  return (
    <Filter id="price-filter">
      <h4 className={classes["filter-container__heading"]}>Khoảng giá</h4>
      <div className={classes["filter-container__price-input"]}>
        <input
          type="number"
          pattern="[0-9]*"
          placeholder="Giá từ"
          value={addDotStyle(price.minPrice)}
          onChange={setMinPriceHandler}
        />
        <span>-</span>
        <input
          type="number"
          pattern="[0-9]*"
          placeholder="Giá đến"
          value={addDotStyle(price.maxPrice)}
          onChange={setMaxPriceHandler}
        />
      </div>
      <button className={classes["filter-container__actions"]}>Áp dụng</button>
    </Filter>
  );
};

export default PriceFilter;
