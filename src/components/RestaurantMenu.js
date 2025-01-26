import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestroMenu from "../utils/useRestroMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestroMenu = () => {
  const { id } = useParams();
  // console.log("resId,", id);

  const ResInfo = useRestroMenu(id);
  // console.log("ResInfo", ResInfo);

  const [ShowIndex, setShowIndex] = useState(null);

  if (ResInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwo } =
    ResInfo.data?.cards[0]?.card?.card?.info;
  // const { name, cuisines } = ResInfo.data?.cards[0]?.card?.card?.info; // restaurant

  // const { name, cuisines } = ResInfo.data?.cards[2]?.card?.card?.info?.name; // restaurant
  // const { itemCards } =
  //   ResInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card
  //     ?.card; // access recomended cards
  // console.log(
  //   "all before recomended",
  //   ResInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards
  // );
  // console.log("hiii");
  // console.log("itemCards", itemCards);

  const categories =
    ResInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log("categories", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")}-{costForTwo / 100}
      </p>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          ShowItems={ShowIndex === index ? true : false}
          setShowIndex={() =>
            index === ShowIndex ? setShowIndex(null) : setShowIndex(index)
          } // 14
        /> //
      ))}
    </div>
  );
};

export default RestroMenu;
