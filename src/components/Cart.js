import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearItem());
  }
  return (
    <div className="cart">
      This is a Cart Component - {cartItems.length} !!!
      <button className="btn" onClick={() => {handleClear()}}>Clear</button>
      <div className="cartItems">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
