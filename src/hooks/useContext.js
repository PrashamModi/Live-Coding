import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dummyname",
    email: "dummy@mail.com",
  },
});

UserContext.displayName  = "UserContext"

export default UserContext;
