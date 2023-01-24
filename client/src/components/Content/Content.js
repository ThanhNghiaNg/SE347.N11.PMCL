import classes from "./Content.module.css";
import Container from "../UI/Container";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/products";
import { hostURL } from "../../utils/global";
import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import SidebarHome from "../Sidebar/SidebarHome/SidebarHome";
import ContentBooks from "./ContentBooks/ContentBooks";
import ContentCustomers from "./ContentCustomers/ContentCustomers";

const Content = (props) => {
  console.log("content running");
  const useCustomer = props.useCustomer;
  const allProducts = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  const url = `${hostURL}/`;
  useEffect(() => {
    const fecthBooks = async (url) => {
      const respone = await fetch(url);
      const data = await respone.json();
      dispatch(productActions.setAllProducts(data.data));
    };
    if (allProducts.length === 0) {
      fecthBooks(url);
    }
  }, [url]);

  return (
    <Container className={classes.content}>
      <Sidebar useCustomer={useCustomer} />
      {useCustomer && <ContentCustomers />}
      {!useCustomer && <ContentBooks />}
    </Container>
  );
};

export default React.memo(Content);
