import React, { useEffect, useState } from "react";
import Filter from "../../../../UI/Filter";
import classes from "./BookInforFilter.module.css";

const BookInforFilter = (props) => {
  const [checked, setChecked] = useState([]);
  const [showToggleButton, setShowToggleButton] = useState(
    props.filteredData.length > 5 ? true : false
  );
  const [itemNumber, setItemNumber] = useState(
    props.filteredData.length > 5 ? 5 : props.filteredData.length
  );

  const checkHandler = (value) => {
    setChecked((prev) => {
      if (checked.includes(value)) {
        return checked.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  useEffect(() => {
    props.onSaveAllFilters({ [props.filteredTopic]: checked });
  }, [checked]);

  const expandListHandler = () => {
    if (itemNumber <= 5) {
      setItemNumber(props.filteredData.length);
    } else {
      setItemNumber(5);
    }
  };

  return (
    <Filter>
      <h4 className={classes["filter-container__heading"]}>
        {props.filterHeading}
      </h4>
      <div className={classes["filter-container__list-item"]}>
        {props.filteredData.slice(0, itemNumber).map((topic, index) => (
          <label className={classes["item"]} key={index}>
            <label className={classes["topic"]}>
              <input
                type="checkbox"
                checked={checked.includes(topic)}
                onChange={() => checkHandler(topic)}
              />
              <span>{topic}</span>
            </label>
          </label>
        ))}
      </div>
      {showToggleButton && (
        <div
          className={classes["filter-container__toggle"]}
          onClick={expandListHandler}
        >
          {itemNumber <= 5 ? (
            <React.Fragment>
              <span>Xem thêm</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stokewidth="0"
                viewBox="0 0 512 512"
                color="#0B74E5"
                height="16px"
                width="16px"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(11, 116, 229)" }}
              >
                <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
              </svg>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <span>Thu gọn</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stokewidth="0"
                viewBox="0 0 512 512"
                color="#0B74E5"
                height="16px"
                width="16px"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(11, 116, 229)" }}
              >
                <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path>
              </svg>
            </React.Fragment>
          )}
        </div>
      )}
    </Filter>
  );
};

export default BookInforFilter;
