import classes from "./Content.module.css";
import Container from "../UI/Container";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/products";
import { hostURL } from "../../utils/global";
import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ContentBooks from "./ContentBooks/ContentBooks";
import ContentCustomers from "./ContentCustomers/ContentCustomers";

const Content = (props) => {
  const allProducts = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  const url = `${hostURL}/`;
  useEffect(() => {
    const fecthBooks = async (url) => {
      const respone = await fetch(url);
      // console.log(respone)
      const data = await respone.json();
      // console.log(data)
      dispatch(productActions.setAllProducts(data.data));
    };
    fecthBooks(url);
  }, [url]);

  return (
    <Container className={classes.content}>
      <Sidebar />
      {/* <ContentBooks /> */}
      <ContentCustomers />
    </Container>
  );
};

export default React.memo(Content);
