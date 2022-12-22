import { useParams } from "react-router";
import classes from "../components/Content/Content.module.css";
import OrderDetail from "../components/Content/ContentCustomers/OrderManagement/OrderDetail/OrderDetail";
import Container from "../components/UI/Container";
import SidebarCustomner from "../components/Sidebar/SidebarCustomer/SidebarCustomer";
import { useEffect, useState } from "react";
import { hostURL } from "../utils/global";

const Order = (props) => {
  const params = useParams();
  const orderId = params.id;
  const [order, setOrder] = useState();
  useEffect(() => {
    const getOrderByID = async () => {
      const respone = await fetch(`${hostURL}/user/order/${orderId}`, {
        credentials: "include",
      });
      const data = await respone.json();
      setOrder(data)
      console.log(data);
    };
    getOrderByID();
  }, []);
  return (
    <Container className={classes.content}>
      <SidebarCustomner />
      {order && <OrderDetail order={order}/>}
    </Container>
  );
};

export default Order;
