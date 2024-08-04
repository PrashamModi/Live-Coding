import { IMG_CDN_URL } from "../constants";

const FoodItem = ({
  name,
  description,
  imageId,
  price
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL+imageId} alt="Not Loaded" />
      <h2>{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees : {price / 100}</h4>
    </div>
  );
};

export default FoodItem;