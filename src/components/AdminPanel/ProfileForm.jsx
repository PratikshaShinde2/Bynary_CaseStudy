import React, { useState, useEffect } from 'react';

const ProfileForm = ({
  addProfile,
  selectedProfile,
  setSelectedProfile,
}) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (selectedProfile) {
      setFormData(selectedProfile);
    } else {
      setFormData({ name: '', email: '' });
    }
  }, [selectedProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProfile({ ...formData, id: Date.now() }); // Add new profile
    setFormData({ name: '', email: '' }); // Reset form data
    setSelectedProfile(null); // Reset selected profile
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedProfile ? 'Edit Profile' : 'Add Profile'}</h2>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Profile
      </button>
    </form>
  );
};

export default ProfileForm;
