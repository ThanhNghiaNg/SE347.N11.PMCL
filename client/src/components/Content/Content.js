import classes from "./Content.module.css";
import Container from "../UI/Container";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/products";
import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ContentBooks from "./ContentBooks/ContentBooks";

const Content = (props) => {
  const allProducts = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  const url =
    "https://tiki.vn/api/v2/products?limit=40&include=advertisement&aggregations=2&trackity_id=8ab0e3aa-cf36-1409-0d15-3cfedd29a2e3&q=s%C3%A1ch&page=2";
  useEffect(() => {
    const fecthBooks = async (url) => {
      const respone = await fetch(url);
      const data = await respone.json();
      dispatch(productActions.setAllProducts(data.data));
    };
    fecthBooks(url);
  }, [url]);

  return (
    <Container className={classes.content}>
      <Sidebar />
      <ContentBooks/>
    </Container>
  );
};

export default React.memo(Content);
