import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';

const Home = () => {
    const users = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleDeleteUser = (id) => {
        dispatch(deleteUser({ id: id }));
    };

    return (
        <div className='container mx-auto p-4'>
            <h2 className='text-3xl font-bold text-center mb-6 text-gray-800'>CRUD App with JSON Server</h2>
            <Link to="/create" className="block bg-green-600 text-white py-2 pl-3 font-black rounded-lg shadow hover:bg-green-700 transition duration-300 mb-4">Create +</Link>
            <div className="overflow-x-auto rounded-lg shadow-lg">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="bg-gray-200 border-b">
                            <th className="py-2 px-4 text-left text-gray-600">ID</th>
                            <th className="py-2 px-4 text-left text-gray-600">Name</th>
                            <th className="py-2 px-4 text-left text-gray-600">Email</th>
                            <th className="py-2 px-4 text-left text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b hover:bg-gray-100 transition duration-200">
                                <td className="py-2 px-4 text-gray-700">{user.id}</td>
                                <td className="py-2 px-4 text-gray-700">{user.name}</td>
                                <td className="py-2 px-4 text-gray-700">{user.email}</td>
                                <td className="py-2 px-4">
                                    <div className="flex space-x-2">
                                        <Link to={`/edit/${user.id}`} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300">Edit</Link>
                                        <button 
                                            onClick={() => handleDeleteUser(user.id)} 
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
