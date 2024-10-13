import React, { useState } from 'react';
import './AdminPanel.css'; 

const AdminPanel = ({ profiles, addProfile, deleteProfile, updateProfile }) => {
  const [newProfile, setNewProfile] = useState({ name: '', phone: '', email: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleAddProfile = () => {
    const id = profiles.length ? profiles[profiles.length - 1].id + 1 : 1; 
    addProfile({ ...newProfile, id });
    setNewProfile({ name: '', phone: '', email: '', description: '' });
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <div className="profile-form">
        <h3>Add New Profile</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newProfile.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={newProfile.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newProfile.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newProfile.description}
          onChange={handleChange}
        />
        <button onClick={handleAddProfile}>Add Profile</button>
      </div>

      <div className="existing-profiles">
        <h3>Existing Profiles</h3>
        <ul>
          {profiles.map((profile) => (
            <li key={profile.id} className="profile-item">
              {profile.name} - {profile.phone}
              <button onClick={() => deleteProfile(profile.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
