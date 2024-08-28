import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from './UserReducer';

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const existingUser = users.find((user) => user.id === parseInt(id));
  const [uname, setName] = useState(existingUser?.name || '');
  const [uemail, setEmail] = useState(existingUser?.email || '');

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateUser({ id: parseInt(id), name: uname, email: uemail }));
    navigate('/');
  };

  return (
    <div className='flex items-center justify-center w-full h-screen bg-gradient-to-r from-purple-500 to-pink-500'>
      <div className='p-8 bg-white rounded-lg shadow-lg w-96'>
        <h3 className='mb-6 text-3xl font-bold text-center text-gray-800'>Update User</h3>
        <a href='/' className='block py-2 mb-4 font-semibold text-center text-white transition duration-300 bg-green-600 rounded-lg shadow hover:bg-green-700 hover:shadow-lg'>Home</a>
        <form onSubmit={handleUpdate}>
          <div className='mb-4'>
            <label htmlFor="name" className='block mb-2 font-medium text-gray-700'>Name:</label>
            <input
              type="text"
              name='name'
              className='w-full p-3 transition duration-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              placeholder='Enter name...'
              value={uname}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="email" className='block mb-2 font-medium text-gray-700'>Email:</label>
            <input
              type="email"
              name='email'
              className='w-full p-3 transition duration-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              placeholder='Enter email...'
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type='submit' className='w-full py-2 font-semibold text-white transition duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg'>Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
