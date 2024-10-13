import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProfileDetails from './components/ProfileDetails/ProfileDetails';
import AdminPanel from './components/AdminPanel/AdminPanel';
import './App.css';

const App = () => {
  const [profiles, setProfiles] = useState([]); 
  const [selectedProfile, setSelectedProfile] = useState(null); 

  // add a new profile
  const addProfile = (newProfile) => {
    const id = profiles.length ? profiles[profiles.length - 1].id + 1 : 1; 
    setProfiles((prevProfiles) => [...prevProfiles, { ...newProfile, id }]); 
  };

  // delete a profile by ID
  const deleteProfile = (id) => {
    setProfiles((prevProfiles) => prevProfiles.filter((profile) => profile.id !== id)); 
  };

  return (
    <Router>
      <div className="app">
        <Navbar profiles={profiles} onSelectProfile={setSelectedProfile} /> 
        <div className="content">
          <Routes>
            <Route path="/" element={<h1>Welcome! Select a profile to view details.</h1>} />
            <Route path="/admin" element={
              <AdminPanel
                profiles={profiles}
                addProfile={addProfile}
                deleteProfile={deleteProfile}
              />
            } />
            <Route
              path="/profile/:id"
              element={<ProfileDetails profiles={profiles} />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
