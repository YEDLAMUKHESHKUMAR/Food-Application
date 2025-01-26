import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
  const { data } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    data?.info;
  //   console.log(data);
  //   console.log(props.key);
  const userData = useContext(UserContext);
  return (
    <div className="res-card m-4 p-4 w-[250px] h-96 bg-gray-200 rounded-lg hover:cursor-pointer shadow-lg">
      <img
        className="res-logo rounded-lg h-[200px] w-full object-cover"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{userData.loggedInUser}</h4>
    </div>
  );
};

export const WithVegLabel = (RestaurantCard) => {
  return (props) => {
    // 13.2
    return (
      <div>
        <label className="absolute bg-green-600 text-white px-4 py-1">
          Veg
        </label>
        <RestaurantCard {...props} /> {/* 13.3 */}
      </div>
    );
  };
};

export default RestaurantCard;
