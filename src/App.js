import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import Pagination from './Pagination';
import './App.css'; // Import CSS styles

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      setError('Error fetching data');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search by name" onChange={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <div className="user-list">
        {filteredUsers.map(user => (
          <UserCard key={user.name} user={user} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default App;


