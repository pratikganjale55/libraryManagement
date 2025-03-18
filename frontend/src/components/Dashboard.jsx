import { useEffect, useState } from 'react';
import { fetchBooks } from '../api';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    const role = localStorage.getItem('role');

    useEffect(() => {
        fetchBooks().then(setBooks).catch(err => console.error("Error fetching books:", err));
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Library Dashboard</h2>
                    <button 
                        onClick={handleLogout} 
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                    >
                        Logout
                    </button>
                </div>

                {role === 'admin' && (
                    <div className="mb-4">
                        <Link to="/add-book">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                                Add Book
                            </button>
                        </Link>
                    </div>
                )}

                <div className="overflow-x-auto">
                    <table className="w-full bg-white border border-gray-200 shadow-md rounded-lg">
                        <thead className="bg-gray-200">
                            <tr className="text-left">
                                <th className="p-3 border">Title</th>
                                <th className="p-3 border">Author</th>
                                <th className="p-3 border">Genre</th>
                                <th className="p-3 border">Year</th>
                                <th className="p-3 border">Description</th>
                                <th className="p-3 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.length > 0 ? (
                                books.map((book) => (
                                    <tr key={book._id} className="hover:bg-gray-100">
                                        <td className="p-3 border">{book.title}</td>
                                        <td className="p-3 border">{book.author}</td>
                                        <td className="p-3 border">{book.genre}</td>
                                        <td className="p-3 border">{book.year}</td>
                                        <td className="p-3 border">{book.description}</td>
                                        <td className="p-3 border">
                                            <Link to={`/book/${book._id}`} state={{ book }}>
                                                <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition duration-300">
                                                    View
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="p-3 text-center text-gray-500">No books available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
