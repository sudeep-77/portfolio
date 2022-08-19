import React from "react";
import user from "../../assets/user.png";

const Card = ({ name, email, address, username }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={user} alt="user" />
        <h3>{name}</h3>
      </div>
      <div className="card-content">
        <h4>{username}</h4>
        <h4>{email}</h4>
        <h4>{address.street}</h4>
      </div>
    </div>
  );
};

export default Card;
