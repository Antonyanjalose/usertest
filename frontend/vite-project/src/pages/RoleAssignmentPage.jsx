import React, { useState, useEffect } from 'react';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_BASE_URL;
const RoleAssignmentPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [role, setRole] = useState('member');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${apiUrl}/users`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setUsers(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  const handleRoleChange = async () => {
    try {
      await axios.put(`${apiUrl}/users/${selectedUser}/role`, { role }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Role updated successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Assign Roles</h2>
      <select onChange={(e) => setSelectedUser(e.target.value)}>
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.username} - {user.role}
          </option>
        ))}
      </select>
      <div>
        <label>Select Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="member">Member</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button onClick={handleRoleChange}>Assign Role</button>
    </div>
  );
};

export default RoleAssignmentPage;
