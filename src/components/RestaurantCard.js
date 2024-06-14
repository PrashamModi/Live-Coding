import { IMG_CDN_URL } from "../constants";

export default RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  area,
  avgRating,
  lastMileTravel,
  costForTwo,
}) => {
  return (
    <div className="card">
      <img src={`${IMG_CDN_URL + cloudinaryImageId}`} alt="Not Loaded" />
      <h2>{name}</h2>
      <h3 style={{ color: "gray", marginTop: "10px" }}>
        {cuisines?.join(", ")}
      </h3>
      <h5>{area}</h5>
      <span>
        <h4>
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{lastMileTravel}</h4>
        <h4>{costForTwo}</h4>
      </span>
    </div>
  );
};