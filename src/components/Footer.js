import { useContext } from "react";
import UserContext from "../hooks/useContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <h1>Footer</h1>
      <h1>
        {user.name} - {user.email}
      </h1>
    </>
  );
};

export default Footer;
