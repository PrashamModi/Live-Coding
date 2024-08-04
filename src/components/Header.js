import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../hooks/useContext";
import { useSelector } from "react-redux";
import store from "../utils/store";
const Header = () => {
  // const { user } = useContext(UserContext);
  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);
  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">LetHimCook</h1>
      </Link>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
