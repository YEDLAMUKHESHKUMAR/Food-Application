import { useState, useContext } from "react";
import { CDN_URL, LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/UseOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = UseOnlineStatus();
  const data = useContext(UserContext);
  console.log(data);

  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 ">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} alt="Image tag" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">
            Online Status: {onlineStatus === false ? "🔴" : "✅"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          
          <li className="px-4">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
