import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const login = async (username, password) => {
    return axios.post(`${API_URL}/auth/login`, { username, password });
};

export const register = async (username, password, role) => {
    return axios.post(`${API_URL}/auth/register`, { username, password, role });
};

export const fetchBooks = async () => {
    const res = await axios.get(`${API_URL}/books/books`);
    return res.data;
};

export const addBook = async (bookData, token) => {

    const res = await axios.post(`${API_URL}/books/add-book`, bookData, {
        headers: { 
            Authorization: `${token}`,
            "Content-Type": "application/json"
        }
    });

    return res.data;
};
