import { useState } from "react";
import { useSelector } from "react-redux";

import BookInforFilter from "./FilterItem/BookInforFilter/BookInforFilter";
import RateFilter from "./FilterItem/RateFilter/RateFilter";
import PriceFilter from "./FilterItem/PriceFilter/PriceFilter";

import classes from "./SidebarHome.module.css";

const SidebarHome = (props) => {
  const currentProducts = useSelector(
    (state) => state.products.currentProducts
  );

  const filteredCategory = currentProducts
    .map((product) => product.category)
    .filter((value, index, self) => self.indexOf(value) === index);

  const filteredPublisher = currentProducts
    .map((product) => product.publisher)
    .filter((value, index, self) => self.indexOf(value) === index);

  let filteredAuthor = [];
  currentProducts.forEach((product) => {
    product.authors.forEach((author) => filteredAuthor.push(author.name));
  });
  filteredAuthor = filteredAuthor.filter(
    (value, index, self) => self.indexOf(value) === index
  );

  return (
    <div className={classes["sidebar"]}>
      <BookInforFilter
        filterHeading="Danh mục sách"
        filteredData={filteredCategory}
      />
      <BookInforFilter filterHeading="Tác giả" filteredData={filteredAuthor} />
      <BookInforFilter
        filterHeading="Nhà xuất bản"
        filteredData={filteredPublisher}
      />
      <PriceFilter />
      <RateFilter />
    </div>
  );
};

export default SidebarHome;
