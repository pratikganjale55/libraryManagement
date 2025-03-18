import { useState } from 'react';
import { addBook } from '../api';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [book, setBook] = useState({ title: '', author: '', genre: '', year: '', description: '' });
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addBook(book, token);
            navigate('/dashboard');
        } catch (error) {
            console.error("Error adding book:", error.response?.data || error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">Add a New Book</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        name="title"
                        placeholder="Title"
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <input
                        name="author"
                        placeholder="Author"
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <input
                        name="genre"
                        placeholder="Genre"
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <input
                        name="year"
                        type="number"
                        placeholder="Publication Year"
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Add Book
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBook;
