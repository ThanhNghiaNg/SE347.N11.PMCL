import { useEffect, useState } from "react";
import Filter from "../../../../UI/Filter";
import classes from "./PriceFilter.module.css";

const addDotStyle = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
const removeDotStyle = (value) => {
  return value.toString().split(".").join("");
};

const PriceFilter = (props) => {
  const [price, setPrice] = useState({ minPrice: 0, maxPrice: 0 });
  const [showClear, setShowClear] = useState(false);

  const setMinPriceHandler = (e) => {
    setPrice((prev) => ({
      ...prev,
      minPrice: Number(e.target.value),
    }));
  };

  const setMaxPriceHandler = (e) => {
    setPrice((prev) => ({
      ...prev,
      maxPrice: Number(e.target.value),
    }));
  };

  const applyFilterHandler = () => {
    if (price.minPrice > price.maxPrice) {
      setPrice({ minPrice: 0, maxPrice: 0 });
    } else {
      props.onSaveAllFilters({ cost: price });
      // props.onFilterBook();
      setShowClear(true);
    }
  };

  const clearFilterHandler = () => {
    props.onSaveAllFilters({ cost: null });
    setPrice({ minPrice: 0, maxPrice: 0 });
    setShowClear(false);
  };

  return (
    <Filter id="price-filter">
      <h4 className={classes["filter-container__heading"]}>Khoảng giá</h4>
      <div className={classes["filter-container__price-input"]}>
        <input
          type="number"
          pattern="[0-9]*"
          placeholder="Giá từ"
          value={String(price.minPrice)}
          onChange={setMinPriceHandler}
        />
        <span>-</span>
        <input
          type="number"
          pattern="[0-9]*"
          placeholder="Giá đến"
          value={String(price.maxPrice)}
          onChange={setMaxPriceHandler}
        />
      </div>
      {showClear && (
        <p
          className={classes["filter-container__clear"]}
          onClick={clearFilterHandler}
        >
          Xóa bộ lọc
        </p>
      )}

      <button
        className={classes["filter-container__actions"]}
        onClick={applyFilterHandler}
      >
        Áp dụng
      </button>
    </Filter>
  );
};

export default PriceFilter;
