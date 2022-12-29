import { useEffect, useState } from "react";
import Filter from "../../../../UI/Filter";
import StarRate from "./StarRate";
import classes from "./RateFilter.module.css";

const rateFilter = [5, 4, 3, 2, 1];

const RateFilter = (props) => {
  const [checked, setChecked] = useState(null);

  const checkHandler = (value) => {
    setChecked((prev) => (prev !== value ? value : null));
  };
  const onSaveAllFilters = props.onSaveAllFilters
  useEffect(() => {
    
    onSaveAllFilters({ rate: checked });
    // props.onFilterBook();
  }, [checked, onSaveAllFilters]);

  return (
    <Filter id="rate-filter">
      <h4 className={classes["filter-container__heading"]}>Đánh giá</h4>
      <ul className={classes["rating-list"]}>
        {rateFilter.map((item) => (
          <li
            key={item}
            className={`${classes["rating-item"]} ${
              checked === item ? classes["selected"] : ""
            }`}
            onClick={() => {
              checkHandler(item);
            }}
          >
            <div className={classes["rating-star"]}>
              <StarRate numberYellowStar={item} />
            </div>
            <span className={classes["text"]}>từ {item} sao</span>
          </li>
        ))}
      </ul>
    </Filter>
  );
};

export default RateFilter;
