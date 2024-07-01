import { useState, useEffect } from "react";

const useResData = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    console.log("useEffect called");
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=17.37240&lng=78.43780"
      );
      const json = await data?.json();
      console.log(json?.data?.success?.cards);
      setFilteredRestaurants(
        json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setAllRestaurants(
        json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  }

  return [allRestaurants, filteredRestaurants];
};

export default useResData;
