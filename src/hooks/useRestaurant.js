import { useState, useEffect } from "react";

import { MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY } from "../constants";

const getRestaurantData = (json) => {
  const res =
    json?.data?.cards
      ?.map((x) => x.card)
      ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card?.info ||
    null;

  return res;
};

const getMenuItemsData = (json) => {
  const res = json?.data?.cards
    .find((x) => x.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
    ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
    ?.map((x) => x.itemCards)
    .flat()
    .map((x) => x.card?.info);
  return res;
};

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
      );
      const json = await response.json();

      const restaurantData = getRestaurantData(json);

      setRestaurant(restaurantData);

      const menuItemsData = getMenuItemsData(json) || [];

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  }

  return { restaurant, menuItems };
};

export default useRestaurant;
