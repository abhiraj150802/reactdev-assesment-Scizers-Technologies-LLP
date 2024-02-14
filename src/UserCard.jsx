
// UserCard.js
import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
  return (
    <div className="user-card" style={{ backgroundColor: user.hair_color }}>
      <img src={`https://picsum.photos/200/300?random=${user.name}`} alt={user.name} />
      <div className="user-info">
        <h2>{user.name}</h2>
        <p>Hair Color: {user.hair_color}</p>
        <p>Skin Color: {user.skin_color}</p>
        <p>Gender: {user.gender}</p>
        <p>Vehicles: {user.vehicles.length}</p>
      </div>
    </div>
  );
};

export default UserCard;

