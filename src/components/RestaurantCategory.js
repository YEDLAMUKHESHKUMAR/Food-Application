import { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({ data, ShowItems, setShowIndex }) => {
  // console.log(data);
  // console.log(data.length);
  // const [ShowItems, setShowItems] = useState(false);
  // const [Arrow, setArrow] = useState("🔽");
  const handleClick = () => {
    setShowIndex();
    // setArrow("🔼");
  };
  // const handleClick = () => {
  // if (ShowItems === false) {
  //   console.log(data.itemCards.length);
  //   setShowItems(true);
  //   setArrow("🔼");
  // } else {
  //   setShowItems(false);
  //   setArrow("🔽");
  // }
  // };
  return (
    //                6/12 means half
    <div>
      <div className="w-6/12 bg-gray-200 shadow-md p-4 mx-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
          // wondering why only one data is opening even showItems became true...well it is react thing..it only change where changes made...means every restaurant have their own ShowItem state
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{ShowItems === true ? "🔼" : "🔽"}</span>
          {/* <span>{"🔽"}</span> */}
        </div>
        {ShowItems &&
          data.itemCards.map((d) => (
            <ItemList key={d.card?.info?.id} subData={d} />
          ))}
        {/* {
            ShowItems && <ItemList subData={data.itemCards}/>
          } */}
      </div>
    </div>
  );
};

export default RestaurantCategory;
