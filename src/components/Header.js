import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../hooks/useContext";
const Header = () => {
  const { user } = useContext(UserContext);
  console.log(user.name);
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
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <h1>
            {user.name} - {user.email}
          </h1>
        </ul>
      </div>
    </div>
  );
};

export default Header;
