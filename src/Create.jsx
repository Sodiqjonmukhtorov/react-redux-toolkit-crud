import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from './UserReducer';

const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const users = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
        navigate('/');
    };

    return (
        <div className='flex items-center justify-center w-full h-screen bg-gradient-to-r from-blue-500 to-green-500'>
            <div className='p-8 bg-white rounded-lg shadow-lg w-96'>
                <h3 className='mb-6 text-3xl font-bold text-center text-gray-800'>Add New User</h3>
                <a href='/' className='block py-2 mb-4 font-semibold text-center text-white transition duration-300 bg-green-600 rounded-lg shadow hover:bg-green-700 hover:shadow-lg'>Home</a>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="name" className='block mb-2 font-medium text-gray-700'>Name:</label>
                        <input 
                            type="text" 
                            name='name' 
                            className='w-full p-3 transition duration-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500' 
                            placeholder='Enter name...' 
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
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                    </div>
                    <button className='w-full py-2 font-semibold text-white transition duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Create;
