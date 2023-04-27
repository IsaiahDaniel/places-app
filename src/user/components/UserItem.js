import React from 'react';
import Avatar from "../../shared/UIElements/Avatar";
import Card from "../../shared/UIElements/Card";

import "./UserItem.css";
import { Link } from 'react-router-dom';

const UserItem = (props) => {
  return (
    <li className='user-item'>
      <Card className="user-item__content">
        <Link to={`${props.user.id}/places`}>
          <div className="user-item__image">
            <Avatar image={props.user.image}  />
          </div>
          <div className="user-item__info">
            <h2>{props.user.name}</h2>
            <p>{props.user.places} {props.user.places === 1 ? "Place" : "Places"}</p>
          </div>
        </Link>
      </Card>
    </li>
  );
}

export default UserItem;