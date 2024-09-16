import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, setFilter } from '../actions/userActions';

const UserTable = () => {
  const dispatch = useDispatch();
  const { users, loading, filter } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilter({ [name]: value }));
  };

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(filter.name.toLowerCase()) &&
      user.username.toLowerCase().includes(filter.username.toLowerCase()) &&
      user.email.toLowerCase().includes(filter.email.toLowerCase()) &&
      user.phone.toLowerCase().includes(filter.phone.toLowerCase())
    );
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1>User Management</h1>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={filter.name}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={filter.username}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={filter.email}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={filter.phone}
          onChange={handleFilterChange}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
