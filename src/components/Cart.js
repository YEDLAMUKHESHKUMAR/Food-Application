import { useSelector } from "react-redux";
import ItemList from "./itemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { WithRemoveButton } from "./itemList";

const Cart = () => {
  const store = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearItem = () => {
    dispatch(clearCart());
  };

  const RemoveButton = WithRemoveButton(ItemList);

  return (
    <div className="w-6/12 bg-gray-200 shadow-md text-center p-4 mx-auto my-4">
      <button
        className="bg-black text-white p-2 m-2 "
        onClick={handleClearItem}
      >
        Clear cart
      </button>
      {store.length === 0 ? (
        <h1>Your cart is empty</h1>
      ) : (
        store.map((s, index) => (
          <RemoveButton subData={s} key={index} i={index} />
        ))
      )}
    </div>
  );
};

export default Cart;
