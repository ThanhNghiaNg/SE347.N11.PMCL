import { useEffect, useState } from "react";
import { useRef } from "react";
import { productActions } from "../../../store/products";
import { errorsActions } from "../../../store/errors";
import { useDispatch, useSelector } from "react-redux";

import BookInforFilter from "./FilterItem/BookInforFilter/BookInforFilter";
import RateFilter from "./FilterItem/RateFilter/RateFilter";
import PriceFilter from "./FilterItem/PriceFilter/PriceFilter";
import filterBook from "./filterBook";

import classes from "./SidebarHome.module.css";

const SidebarHome = (props) => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts);
  const [allFilters, setAllFilters] = useState({
    category: null,
    authors: null,
    publisher: null,
    cost: null,
    rate: null,
  });

  const saveAllFilters = (filter) => {
    const filterName = Object.keys(filter)[0];
    setAllFilters((prev) => ({ ...prev, [filterName]: filter[filterName] }));
  };

  //   Filter book
  useEffect(() => {
    const result = filterBook(allFilters, allProducts);

    // console.log(result);
    dispatch(productActions.setCurrentProducts(result));
    if (result.length > 0) {
      dispatch(errorsActions.setSuccessFound());
    } else {
      dispatch(errorsActions.setNotFound());
    }
  }, [allFilters]);

  if (allProducts.length === 0) {
    return <div></div>;
  }

  //   Create Filter
  const filteredCategory = allProducts
    .map((product) => product.category)
    .filter((value, index, self) => self.indexOf(value) === index);
  const filteredPublisher = allProducts
    .map((product) => product.publisher)
    .filter((value, index, self) => self.indexOf(value) === index);
  let filteredAuthor = [];
  allProducts.forEach((product) => {
    product.authors.forEach((author) => filteredAuthor.push(author.name));
  });
  filteredAuthor = filteredAuthor.filter(
    (value, index, self) => self.indexOf(value) === index
  );

  return (
    <div className={classes["sidebar"]}>
      <BookInforFilter
        filteredTopic="category"
        filterHeading="Danh mục sách"
        filteredData={filteredCategory}
        onSaveAllFilters={saveAllFilters}
        // onFilterBook={filterBook}
      />
      <BookInforFilter
        filteredTopic="authors"
        filterHeading="Tác giả"
        filteredData={filteredAuthor}
        onSaveAllFilters={saveAllFilters}
        // onFilterBook={filterBook}
      />
      <BookInforFilter
        filteredTopic="publisher"
        filterHeading="Nhà xuất bản"
        filteredData={filteredPublisher}
        onSaveAllFilters={saveAllFilters}
        // onFilterBook={filterBook}
      />
      <PriceFilter
        onSaveAllFilters={saveAllFilters}
        // onFilterBook={filterBook}
      />
      <RateFilter
        onSaveAllFilters={saveAllFilters}
        // onFilterBook={filterBook}
      />
    </div>
  );
};

export default SidebarHome;
