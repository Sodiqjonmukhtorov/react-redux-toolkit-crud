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
    <div className='flex w-full h-screen justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500'>
      <div className='w-96 bg-white rounded-lg shadow-lg p-8'>
        <h3 className='text-3xl font-bold text-center mb-6 text-gray-800'>Update User</h3>
        <a href='/' className='block bg-green-600 text-white py-2 rounded-lg text-center font-semibold hover:bg-green-700 transition duration-300 mb-4 shadow hover:shadow-lg'>Home</a>
        <form onSubmit={handleUpdate}>
          <div className='mb-4'>
            <label htmlFor="name" className='block text-gray-700 mb-2 font-medium'>Name:</label>
            <input
              type="text"
              name='name'
              className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200'
              placeholder='Enter name...'
              value={uname}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="email" className='block text-gray-700 mb-2 font-medium'>Email:</label>
            <input
              type="email"
              name='email'
              className='w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200'
              placeholder='Enter email...'
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg font-semibold'>Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
