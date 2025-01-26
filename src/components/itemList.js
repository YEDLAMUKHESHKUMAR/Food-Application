// import { useDispatch } from "react-redux";
// import { SUB_DATA_IMAGE } from "../utils/constants";
// import { addItem } from "../utils/cartSlice";
// const ItemList = ({ subData }) => {
//   // const { name, price, defaultPrice, description, imageId } =
//   //   subData.card?.info;
//   //   console.log("price", { price, defaultPrice, name });
//   //   console.log(imageId);
//   const dispatch = useDispatch();
//   const handleAddItem = (d) => {
//     dispatch(addItem(d)); // here subData is nothing but action.payload
//   };

//   return (
//     <div>
//       {subData.map((d) => (
//         <div
//           key={d.card?.info?.id}
//           className="p-2 m-2 text-left border-gray-400 border-b-2 flex justify-between"
//         >
//           <div className="w-[90%]">
//             <div className="py-2">
//               <span>{d.card?.info?.name}</span>
//               <span>
//                 - ₹
//                 {d.card?.info?.price
//                   ? d.card?.info?.price / 100
//                   : d.card?.info?.defaultPrice / 100}
//               </span>
//             </div>
//             <p className="text-xs w-[90%]">{d.card?.info?.description}</p>
//           </div>
//           <div className="relative">
//             <img
//               src={SUB_DATA_IMAGE + d.card?.info?.imageId}
//               className="w-32"
//             />
//             <button
//               onClick={() => handleAddItem(d)}
//               className="bg-white px-3 py-1 shadow-lg absolute bottom-2 right-3 rounded-sm text-green-600 text-sm"
//             >
//               ADD+
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ItemList;

// .. prev ItemList
import { useDispatch } from "react-redux";
import { SUB_DATA_IMAGE } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
const ItemList = ({ subData }) => {
  const { name, price, defaultPrice, description, imageId } =
    subData.card?.info;
  //   console.log("price", { price, defaultPrice, name });
  //   console.log(imageId);
  const dispatch = useDispatch();
  const handleAddItem = (subData) => {
    dispatch(addItem(subData)); // here subData is nothing but action.payload
  };

  return (
    <div className="p-2 m-2 text-left border-gray-400 border-b-2 flex justify-between ">
      <div className="w-[90%]">
        <div className="py-2">
          <span>{name}</span>
          <span>- ₹{price ? price / 100 : defaultPrice / 100}</span>
        </div>
        <p className="text-xs w-[90%]">{description}</p>
      </div>
      <div className="relative">
        <img src={SUB_DATA_IMAGE + imageId} className="w-32" />
        <button
          onClick={() => handleAddItem(subData)}
          className="bg-white px-3 py-1 shadow-lg absolute bottom-2 right-3 rounded-sm text-green-600 text-sm"
        >
          ADD+
        </button>
      </div>
    </div>
  );
};

// HOC for remove button in cart
export const WithRemoveButton = (ItemList) => {
  return (props) => {
    const { i } = props;
    const dispatch = useDispatch();
    const handleRemoveItem = (index) => {
      dispatch(removeItem(index));
    };
    // console.log(i);
    return (
      <div>
        <div className="relative">
          <button
            className="text-white absolute bottom-5 right-30 z-10 bg-black px-4 py-2 "
            onClick={() => handleRemoveItem(i)}
          >
            Remove
          </button>
          <ItemList {...props} />
        </div>
      </div>
    );
  };
};

export default ItemList;
