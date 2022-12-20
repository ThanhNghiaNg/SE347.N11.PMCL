import Content from "../components/Content/Content";
import { useDispatch } from "react-redux";
import { navigationActions } from "../store/UserNavigationBar";
import { useParams } from "react-router";

const Customer = (props) => {
  const dispatch = useDispatch();
  const params = useParams()
  console.log(params.id)
  dispatch(navigationActions.setSelectedNav(params.id));
  return (
    <div>
      <Content useCustomer={true} />
    </div>
  );
};

export default Customer;
