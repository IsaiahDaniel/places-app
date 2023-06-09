import React from 'react';
import UserItem from './UserItem';

import "./UserList.css";
import Card from '../../shared/UIElements/Card';

const UserList = (props) => {

  if(props.items.length === 0){
    return (
      <div className="center">
        <Card>
          <h2>No Users Found.</h2>
        </Card>
      </div>
    )
  }


  return (
    <ul className="users-list">
      { props.items.map(item => (
        <UserItem user={item} key={item.id} />
      )) }
    </ul>
  )
}

export default UserList