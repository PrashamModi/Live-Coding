import { useContext, useState } from "react";
import Shimmer from "../Shimmer"
import RestaurantCard from "./RestaurantCard";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import Offline from "./Offline";
import useResData from "../hooks/useResData";
import UserContext from "../hooks/useContext";

function filterData(searchText, restaurants) {
  const data = restaurants.filter((restaurant) => {
    return restaurant.info.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  return data;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, FilterRes] = useResData();
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const isOnline = useOnline();

  const {user, setUser} = useContext(UserContext);

  if (!isOnline) {
    return <Offline />;
  }

  if (filteredRestaurants?.length === 0) {
    return <h1 className="not-found">No Restaurant Found As Per The Filter</h1>;
  }
  // if (!allRestaurants) return null;
  return (
    <>
      {console.log("render")}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setFilteredRestaurants(filterData(searchText, allRestaurants));
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          <input type="text" value={user.name} onChange={e => setUser({
            name : e.target.value,
            email : "New Email"
          })}/>
          <FaSearch />
        </button>
      </div>
      <div className="restaurant-list">
        {allRestaurants?.length === 0 && FilterRes.length === 0 ? (
          <Shimmer />
        ) : (
          (filteredRestaurants === null ? FilterRes : filteredRestaurants)?.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard {...restaurant?.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
