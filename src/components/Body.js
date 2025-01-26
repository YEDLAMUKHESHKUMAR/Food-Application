import RestaurantCard, { WithVegLabel } from "./RestaurantCard";
// import { resList } from "../utils/mockData";
import { useState, useEffect, useContext } from "react"; // hooks
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/UseOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [RestroCards, setRestroCards] = useState([]); // 7
  const [copyRestroCards, setcopyRestroCards] = useState([]);
  const [SearchText, setSearchText] = useState("");
  const { setuserName, loggedInUser } = useContext(UserContext);
  const WithLabelOfVeg = WithVegLabel(RestaurantCard); // 13

  useEffect(() => {
    fetchData();
  }, []); // 8

  const fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.701478&lng=83.205056&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.706039658928468&lng=81.11214872449636&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const Restaurants =
      // json.data.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants ||
      // json.data.cards[3].card?.card?.gridElements?.infoWithStyle?.restaurants; // accessing all restaurants from swigy API
      json.data.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants; // accessing all restaurants from swigy API
    setRestroCards(Restaurants);
    setcopyRestroCards(Restaurants);
    // console.log("Restaurants", Restaurants);
    // console.log("json", json);
  };

  const onlineStatus = UseOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you are offline </h1>;
  }

  if (!copyRestroCards || copyRestroCards.length === 0) {
    // if you get error here , don't panic..the issue is there is no data in our api..means swiggy removing the restaurants some times
    return <Shimmer />;
  }

  return (
    <div className="body">
      {/* <div className="filter flex ">  */}

      <div className="filter flex items-center">
        {/* Filter search */}
        <div className="search m-4 p-4">
          <input
            className=" border border-solid border-black "
            type="text"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          {/* Filter button */}

          <button
            className="px-4 py-1 bg-green-200 m-4 shadow-md rounded-md"
            onClick={() => {
              // console.log(SearchText);
              const filteredRestroCards = RestroCards.filter((res) =>
                res.info.name.toLowerCase().includes(SearchText.toLowerCase())
              );
              setcopyRestroCards(filteredRestroCards);
            }}
          >
            Search
          </button>

          {/* Top Rated */}
        </div>
        {/* <div className="search m-4 p-4 flex items-center"> */}
        <div className="search m-4 p-4 ">
          <button
            className="px-4 py-1 bg-gray-200 rounded-md"
            onClick={() => {
              const filteredList = RestroCards.filter(
                (res) => res.info.avgRating > 4
              );
              setRestroCards(filteredList);
              // console.log(RestroCards);
            }}
          >
            Top Rated
          </button>

          {/* UserName */}

          <input
            className="border border-black p-1 m-2"
            onChange={(e) => setuserName(e.target.value)}
            value={loggedInUser}
          />
        </div>
      </div>

      {/* RestroCards */}

      <div className="restro-container flex flex-wrap">
        {/* {console.log(RestroCards)} */}

        {copyRestroCards.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {!restaurant?.info?.veg ? (
              <RestaurantCard data={restaurant} />
            ) : (
              <WithLabelOfVeg data={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
