import React from 'react';

const List = ({ profiles, deleteProfile, setSelectedProfile }) => {
  return (
    <div className="profile-list">
      <h2>Profile List</h2>
      {profiles.length === 0 ? (
        <p>No profiles available.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile) => (
              <tr key={profile.id}>
                <td>{profile.name}</td>
                <td>{profile.email}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => setSelectedProfile(profile)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteProfile(profile.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default List;
