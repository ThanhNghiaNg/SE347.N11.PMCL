import React, { useEffect, useState } from "react";
import { productActions } from "../../../store/products";
import { errorsActions } from "../../../store/errors";
import { useDispatch, useSelector } from "react-redux";

import BookInforFilter from "./FilterItem/BookInforFilter/BookInforFilter";
import RateFilter from "./FilterItem/RateFilter/RateFilter";
import PriceFilter from "./FilterItem/PriceFilter/PriceFilter";
import filterBook from "./filterBook";

import classes from "./SidebarHome.module.css";

const SidebarHome = (props) => {
  console.log("sidebar home running");
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts);
  const [refresh, setRefresh] = useState(false)
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
    setRefresh(prev=>!prev)
  };
  //   Filter book
  useEffect(() => {
    console.log("sidebar home running2");
    console.log(refresh);
    const result = filterBook(allFilters, allProducts);

    dispatch(productActions.setCurrentProducts(result));
    if (result.length > 0) {
      dispatch(errorsActions.setSuccessFound());
    } else if (Object.values(allFilters).some((value) => value)) {
      dispatch(errorsActions.setNotFound());
    }
  }, [refresh]);

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

export default React.memo(SidebarHome);
