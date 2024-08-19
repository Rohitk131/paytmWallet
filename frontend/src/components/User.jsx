import { Button } from "@headlessui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import Spinner  from './Spinner'; 

export default function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/user/bulk', {
          params: { filter } 
        });
        setUsers(response.data.user);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [filter]);

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  if (loading) return <Spinner />; // Use a spinner for loading state

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="font-bold text-2xl mb-4">Users</div>
      <div className="my-4">
        <input
          type="text"
          placeholder="Search users..."
          value={filter}
          onChange={handleSearchChange}
          className="w-1/4 px-4 py-2 border rounded-full border-gray-300 shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
        {users.length > 0 ? (
          users.map(user => <User key={user._id} user={user} />)
        ) : (
          <p className="text-gray-100">No users found</p>
        )}
      </div>
    </div>
  );
}

function User({ user }) {
  return (
    <div className="bg-slate-200 border border-gray-200 rounded-2xl shadow-2xl p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="rounded-full h-16 w-16 bg-white flex items-center justify-center text-2xl font-semibold text-gray-800">
          {user.firstName[0]}
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-gray-900">
            {user.firstName} {user.lastName}
          </span>
          <span className="text-sm text-gray-600">
            {user._id}
          </span>
        </div>
      </div>
      <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-xl px-4 py-2">
        Send Money
      </Button>
    </div>
  );
}
