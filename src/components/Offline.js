import React from "react";
import offline from "../assets/offline.png";

const Offline = () => {
  return (
    <div className="user-offline-container">
      <h1 className="user-offline-heading">🔴 Offline!</h1>
      <img className="offline-image" src={offline} alt="Offline" />
      <p className="user-offline-message">
        Sorry, it seems that you are currently offline.
      </p>
    </div>
  );
};

export default Offline;
