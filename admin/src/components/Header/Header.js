import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/add-book">Add book</Link>
          </li>
          <li>
            <Link to="/order">Orders</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
