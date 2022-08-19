import React, { useState, useEffect } from "react";
import Card from "../Card";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <Card
          name={user.name}
          username={user.username}
          email={user.email}
          address={user.address}
          key={user.id}
        />
      ))}
    </div>
  );
};

export default User;
