import { Button } from "@headlessui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from './Spinner'; 
import { Link, useNavigate } from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://paytm-wallet-backend.vercel.app/api/v1/user/bulk', {
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
    <div className="container mx-auto px-4 py-6 h-screen">
      <div className="font-bold text-2xl mb-4 text-white">Users</div>
      <div className="my-4">
        <input
          type="text"
          placeholder="Search users..."
          value={filter}
          onChange={handleSearchChange}
          className="w-full sm:w-1/2 lg:w-1/4 px-4 py-2 border rounded-full border-gray-300 shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
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
  const navigate = useNavigate();
  return (
    <div className="bg-slate-200 border border-gray-200 rounded-2xl shadow-2xl p-4 flex items-center justify-between flex-col sm:flex-row">
      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
        <div className="rounded-full h-12 w-12 sm:h-16 sm:w-16 bg-white flex items-center justify-center text-xl sm:text-2xl font-semibold text-gray-800">
          {user.firstName[0]}
        </div>
        <div className="flex flex-col">
          <span className="text-md sm:text-lg font-semibold text-gray-900">
            {user.firstName} {user.lastName}
          </span>
          
          <span className="text-sm text-gray-600">
            {user.username}
          </span>

        </div>
      </div>
      <div className="flex flex-col justify-center w-full sm:w-auto">
            <Button 
              className="bg-blue-500 p-2 sm:p-3 sm:px-4 rounded-xl text-white font-semibold w-full sm:w-auto" 
              onClick={(e) => {
                navigate("/send?id=" + user._id + "&name=" + user.firstName);
            }}>Send Money</Button>
        </div>
      
    </div>
  );
}
