import React from 'react';
import './ProfileCard.css'; 
const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card">
      <h2>{profile.name}</h2>
      <p><strong>Phone:</strong> {profile.phone}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Description:</strong> {profile.description}</p>
    </div>
  );
};

export default ProfileCard;
