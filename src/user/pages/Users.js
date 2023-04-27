import React from 'react';
import UserList from "../components/UserList";

// import "./User.css";

const Users = () => {

  const USERS = [
    { id: 1, name: "Max schwarz", image: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', places: 3 }
  ];

  return (
    <UserList items={USERS} />
  )
}

export default Users