// ProfileDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileCard from '../ProfileCard/ProfileCard'; 
import MapComponent from '../Map/Map'; 

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) {
    return <h2>Profile not found</h2>;
  }

  
  const position = [51.505, -0.09]; // Replace with real coordinates based on the address

  return (
    <div>
      <ProfileCard profile={profile} />
      <MapComponent position={position} address={profile.address} /> {/* Include the MapComponent */}
    </div>
  );
};

export default ProfileDetails;
